import { User } from '../types';

export const PERMISSIONS = {
  // Conteúdo
  EDIT_CONTENT: 'edit_content',
  VIEW_CONTENT: 'view_content',
  
  // Staff
  MANAGE_STAFF: 'manage_staff',
  VIEW_STAFF: 'view_staff',
  
  // Usuários e Permissões
  MANAGE_USERS: 'manage_users',
  MANAGE_PERMISSIONS: 'manage_permissions',
  
  // Configurações
  MANAGE_SETTINGS: 'manage_settings',
  
  // Logs
  VIEW_LOGS: 'view_logs',
  DELETE_LOGS: 'delete_logs',
  
  // Uploads
  UPLOAD_FILES: 'upload_files',
  MANAGE_ASSETS: 'manage_assets',
  
  // Discord Integration
  MANAGE_DISCORD: 'manage_discord',
  VIEW_DISCORD_STATS: 'view_discord_stats',
} as const;

type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];

export const ROLE_PERMISSIONS: Record<User['role'], Permission[]> = {
  owner: Object.values(PERMISSIONS),
  admin: [
    PERMISSIONS.EDIT_CONTENT,
    PERMISSIONS.VIEW_CONTENT,
    PERMISSIONS.MANAGE_STAFF,
    PERMISSIONS.VIEW_STAFF,
    PERMISSIONS.MANAGE_SETTINGS,
    PERMISSIONS.VIEW_LOGS,
    PERMISSIONS.UPLOAD_FILES,
    PERMISSIONS.MANAGE_ASSETS,
    PERMISSIONS.MANAGE_DISCORD,
    PERMISSIONS.VIEW_DISCORD_STATS,
  ],
  editor: [
    PERMISSIONS.EDIT_CONTENT,
    PERMISSIONS.VIEW_CONTENT,
    PERMISSIONS.VIEW_STAFF,
    PERMISSIONS.UPLOAD_FILES,
    PERMISSIONS.VIEW_DISCORD_STATS,
  ],
  moderator: [
    PERMISSIONS.VIEW_CONTENT,
    PERMISSIONS.MANAGE_STAFF,
    PERMISSIONS.VIEW_STAFF,
    PERMISSIONS.VIEW_DISCORD_STATS,
  ],
  viewer: [
    PERMISSIONS.VIEW_CONTENT,
    PERMISSIONS.VIEW_STAFF,
    PERMISSIONS.VIEW_DISCORD_STATS,
  ],
};

export const hasPermission = (user: User, permission: Permission): boolean => {
  const userPermissions = ROLE_PERMISSIONS[user.role];
  return userPermissions.includes(permission);
};

export const canAccessAdminPanel = (user: User): boolean => {
  return hasPermission(user, PERMISSIONS.VIEW_CONTENT);
};

// ID do Owner principal (conforme especificação)
export const OWNER_DISCORD_ID = '1382506667211493429';

export const isOwner = (user: User): boolean => {
  return user.discord_id === OWNER_DISCORD_ID && user.role === 'owner';
};