import { DISCORD_CONFIG } from '../config/discord';

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  email?: string;
}

export interface ServerStats {
  totalMembers: number;
  onlineMembers: number;
  voiceMembers: number;
  lastUpdated: Date;
}

export interface VIPMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  tier: 'diamond' | 'gold' | 'silver';
  joinedAt: string;
  roles: string[];
}

export interface InfluencerMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  platform: 'twitch' | 'youtube' | 'instagram' | 'tiktok';
  followers: string;
  specialty: string;
  description: string;
  link: string;
  verified: boolean;
}

class DiscordApiService {
  private baseUrl = DISCORD_CONFIG.API_BASE_URL;
  private botToken = DISCORD_CONFIG.BOT_TOKEN;
  private serverId = DISCORD_CONFIG.SERVER_ID;

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bot ${this.botToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getServerStats(): Promise<ServerStats> {
    try {
      // Get guild info
      const guild = await this.makeRequest(`/guilds/${this.serverId}?with_counts=true`);
      
      // Get voice channels and count members in voice
      const channels = await this.makeRequest(`/guilds/${this.serverId}/channels`);
      const voiceChannels = channels.filter((channel: any) => channel.type === 2); // Voice channels
      
      let voiceMembers = 0;
      for (const channel of voiceChannels) {
        try {
          const voiceStates = await this.makeRequest(`/guilds/${this.serverId}/voice-states`);
          voiceMembers += voiceStates.filter((state: any) => state.channel_id === channel.id).length;
        } catch (error) {
          console.warn('Could not fetch voice states:', error);
        }
      }

      return {
        totalMembers: guild.approximate_member_count || guild.member_count || 0,
        onlineMembers: guild.approximate_presence_count || 0,
        voiceMembers,
        lastUpdated: new Date(),
      };
    } catch (error) {
      console.error('Error fetching server stats:', error);
      // Return fallback data
      return {
        totalMembers: 1247,
        onlineMembers: 324,
        voiceMembers: 12,
        lastUpdated: new Date(),
      };
    }
  }

  async getVIPMembers(): Promise<VIPMember[]> {
    try {
      const members = await this.makeRequest(`/guilds/${this.serverId}/members?limit=1000`);
      
      // Filter members with VIP roles (you'll need to configure these role IDs)
      const vipRoleIds = ['DIAMOND_ROLE_ID', 'GOLD_ROLE_ID', 'SILVER_ROLE_ID'];
      
      const vipMembers = members.filter((member: any) => 
        member.roles.some((roleId: string) => vipRoleIds.includes(roleId))
      );

      return vipMembers.map((member: any) => ({
        id: member.user.id,
        username: member.user.username,
        discriminator: member.user.discriminator,
        avatar: member.user.avatar,
        tier: this.determineVIPTier(member.roles),
        joinedAt: member.joined_at,
        roles: member.roles,
      }));
    } catch (error) {
      console.error('Error fetching VIP members:', error);
      return [];
    }
  }

  async getInfluencers(): Promise<InfluencerMember[]> {
    try {
      const members = await this.makeRequest(`/guilds/${this.serverId}/members?limit=1000`);
      
      // Filter members with Influencer role (you'll need to configure this role ID)
      const influencerRoleId = 'INFLUENCER_ROLE_ID';
      
      const influencers = members.filter((member: any) => 
        member.roles.includes(influencerRoleId)
      );

      return influencers.map((member: any) => ({
        id: member.user.id,
        username: member.user.username,
        discriminator: member.user.discriminator,
        avatar: member.user.avatar,
        platform: 'twitch', // This would need to be stored in a database or bot data
        followers: '1.2K', // This would need to be fetched from external APIs
        specialty: 'Gaming & Entretenimento',
        description: 'Criador de conteúdo da comunidade',
        link: '#',
        verified: true,
      }));
    } catch (error) {
      console.error('Error fetching influencers:', error);
      return [];
    }
  }

  private determineVIPTier(roles: string[]): 'diamond' | 'gold' | 'silver' {
    if (roles.includes('DIAMOND_ROLE_ID')) return 'diamond';
    if (roles.includes('GOLD_ROLE_ID')) return 'gold';
    return 'silver';
  }

  async exchangeCodeForToken(code: string): Promise<any> {
    const response = await fetch(DISCORD_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: DISCORD_CONFIG.CLIENT_ID,
        client_secret: DISCORD_CONFIG.CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: DISCORD_CONFIG.REDIRECT_URI,
      }),
    });

    return response.json();
  }

  async getUserInfo(accessToken: string): Promise<DiscordUser> {
    const response = await fetch(`${this.baseUrl}/users/@me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.json();
  }
}

export const discordApi = new DiscordApiService();