import React from 'react';
import { Users, MessageCircle, Shield, Activity, TrendingUp, Clock } from 'lucide-react';
import { useDiscordStats } from '../../hooks/useDiscordStats';

const Dashboard: React.FC = () => {
  const { stats, loading, refreshStats } = useDiscordStats();

  const quickActions = [
    { label: 'Editar Sobre nós', action: 'content', color: 'blue' },
    { label: 'Adicionar Staff', action: 'staff', color: 'green' },
    { label: 'Upload de Assets', action: 'assets', color: 'purple' },
    { label: 'Gerenciar Usuários', action: 'permissions', color: 'orange' },
  ];

  const recentActivity = [
    { action: 'Conteúdo editado', user: 'Admin', time: '5 min atrás' },
    { action: 'Novo staff adicionado', user: 'Owner', time: '1 hora atrás' },
    { action: 'Asset carregado', user: 'Editor', time: '2 horas atrás' },
    { action: 'Permissões alteradas', user: 'Owner', time: '3 horas atrás' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total de Membros</p>
              <p className="text-2xl font-bold text-white">
                {loading ? '...' : stats.members_total.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-blue-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Membros Online</p>
              <p className="text-2xl font-bold text-white">
                {loading ? '...' : stats.members_online.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-600 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total de Mensagens</p>
              <p className="text-2xl font-bold text-white">
                {loading ? '...' : stats.messages_total.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-600 rounded-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Staff Ativo</p>
              <p className="text-2xl font-bold text-white">
                {loading ? '...' : stats.staff_count}
              </p>
            </div>
            <div className="p-3 bg-red-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <span className="text-gray-300">{action.label}</span>
                <TrendingUp className={`w-4 h-4 text-${action.color}-400`} />
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">{activity.action}</p>
                  <p className="text-gray-500 text-xs">por {activity.user}</p>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Status do Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-300">Bot Discord</span>
            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
              Online
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-300">Banco de Dados</span>
            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
              Conectado
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-300">Cache Redis</span>
            <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">
              Limitado
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            Última sincronização: {stats.last_updated.toLocaleString()}
          </p>
          <button
            onClick={refreshStats}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
            disabled={loading}
          >
            {loading ? 'Atualizando...' : 'Sincronizar Agora'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;