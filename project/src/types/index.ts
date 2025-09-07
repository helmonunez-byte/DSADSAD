export interface User {
  id: number;
  discord_id: string;
  name: string;
  email?: string;
  role: 'owner' | 'admin' | 'editor' | 'moderator' | 'viewer';
  created_at: Date;
  last_login?: Date;
}

export interface SiteContent {
  key: string;
  value: string;
  updated_by: number;
  updated_at: Date;
}

export interface StaffMember {
  id: number;
  discord_id: string;
  display_name: string;
  role_title: string;
  avatar_url: string;
  show_on_site: boolean;
  bio?: string;
  order_index: number;
}

export interface Partner {
  id: number;
  name: string;
  logo_url: string;
  link: string;
  description: string;
  active: boolean;
  type: 'community' | 'platform' | 'network' | 'sponsor';
}

export interface VIPMember {
  id: number;
  name: string;
  tier: 'diamond' | 'gold' | 'silver';
  avatar_url: string;
  benefits: string[];
  discord_id: string;
}

export interface Influencer {
  id: number;
  name: string;
  platform: 'twitch' | 'youtube' | 'instagram' | 'tiktok';
  avatar_url: string;
  followers: string;
  specialty: string;
  description: string;
  link: string;
  active: boolean;
}

export interface CommunityStats {
  members_total: number;
  members_online: number;
  messages_total: number;
  staff_count: number;
  last_updated: Date;
}

export interface Asset {
  id: number;
  filename: string;
  url: string;
  type: 'image' | 'icon' | 'banner';
  uploaded_by: number;
  uploaded_at: Date;
}

export interface AuditLog {
  id: number;
  user_id: number;
  action: string;
  resource: string;
  old_value?: string;
  new_value?: string;
  timestamp: Date;
}

export interface VIPTier {
  name: string;
  price: string;
  color: string;
  icon: string;
  features: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  followers: string;
  color: string;
  description: string;
}