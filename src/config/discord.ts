export const DISCORD_CONFIG = {
  BOT_TOKEN: import.meta.env.VITE_DISCORD_BOT_TOKEN,
  SERVER_ID: import.meta.env.VITE_DISCORD_SERVER_ID,
  CLIENT_ID: import.meta.env.VITE_DISCORD_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
  REDIRECT_URI: import.meta.env.VITE_DISCORD_REDIRECT_URI,
  API_BASE_URL: 'https://discord.com/api/v10',
  OAUTH_URL: 'https://discord.com/api/oauth2/authorize',
  TOKEN_URL: 'https://discord.com/api/oauth2/token',
  SCOPES: ['identify', 'guilds.members.read'],
};

export const getDiscordAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: DISCORD_CONFIG.CLIENT_ID,
    redirect_uri: DISCORD_CONFIG.REDIRECT_URI,
    response_type: 'code',
    scope: DISCORD_CONFIG.SCOPES.join(' '),
  });
  
  return `${DISCORD_CONFIG.OAUTH_URL}?${params.toString()}`;
};