import { useState, useEffect, useCallback } from 'react';
import { discordApi, DiscordUser } from '../services/discordApi';
import { getDiscordAuthUrl } from '../config/discord';

interface AuthState {
  user: DiscordUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem('discord_user');
    const storedToken = localStorage.getItem('discord_token');

    if (storedUser && storedToken) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }

    // Handle OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      handleOAuthCallback(code);
    }
  }, []);

  const handleOAuthCallback = async (code: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

      const tokenData = await discordApi.exchangeCodeForToken(code);
      const userData = await discordApi.getUserInfo(tokenData.access_token);

      localStorage.setItem('discord_token', tokenData.access_token);
      localStorage.setItem('discord_user', JSON.stringify(userData));

      setAuthState({
        user: userData,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Erro ao fazer login com Discord',
      });
    }
  };

  const login = useCallback(() => {
    window.location.href = getDiscordAuthUrl();
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('discord_token');
    localStorage.removeItem('discord_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    ...authState,
    login,
    logout,
  };
};