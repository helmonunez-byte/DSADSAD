# Central da Web - Comunidade Discord

Uma aplicação web moderna para a comunidade Central da Web no Discord, com integração completa com a API do Discord para exibir estatísticas em tempo real, membros VIP e influencers.

## 🚀 Funcionalidades

- **Integração Discord Completa**: Login OAuth2, estatísticas do servidor em tempo real
- **Sistema VIP**: Exibição de membros VIP com diferentes tiers (Diamond, Gold, Silver)
- **Influencers**: Sistema de influencers com integração às redes sociais
- **Estatísticas em Tempo Real**: 
  - Total de membros do servidor
  - Membros online
  - Membros em canais de voz
- **Design Responsivo**: Interface moderna e responsiva
- **Animações**: Efeitos visuais e animações suaves

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Discord API v10
- **Auth**: Discord OAuth2

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
# Discord Bot Configuration
VITE_DISCORD_BOT_TOKEN=seu_token_do_bot_aqui
VITE_DISCORD_SERVER_ID=id_do_seu_servidor_aqui
VITE_DISCORD_CLIENT_ID=client_id_da_aplicacao_discord
VITE_DISCORD_CLIENT_SECRET=client_secret_da_aplicacao_discord
VITE_DISCORD_REDIRECT_URI=http://localhost:5173/auth/callback
```

### 2. Configuração do Bot Discord

1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications)
2. Crie uma nova aplicação
3. Vá para a seção "Bot" e crie um bot
4. Copie o token do bot para `VITE_DISCORD_BOT_TOKEN`
5. Na seção "OAuth2", adicione a URL de redirect: `http://localhost:5173/auth/callback`
6. Copie o Client ID e Client Secret

### 3. Permissões do Bot

O bot precisa das seguintes permissões no servidor:
- `View Channels`
- `Read Message History`
- `View Server Insights` (para estatísticas)

### 4. Configuração de Roles VIP

No arquivo `src/services/discordApi.ts`, configure os IDs das roles VIP:

```typescript
const vipRoleIds = [
  'ID_DA_ROLE_DIAMOND',
  'ID_DA_ROLE_GOLD', 
  'ID_DA_ROLE_SILVER'
];
```

### 5. Configuração de Influencers

Configure o ID da role de influencer:

```typescript
const influencerRoleId = 'ID_DA_ROLE_INFLUENCER';
```

## 🚀 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── admin/          # Componentes do painel admin
│   ├── Header.tsx      # Cabeçalho com auth
│   ├── HeroSection.tsx # Seção principal
│   ├── VIPSection.tsx  # Seção de membros VIP
│   └── ...
├── config/             # Configurações
│   └── discord.ts      # Config do Discord
├── hooks/              # Custom hooks
│   ├── useAuth.ts      # Hook de autenticação
│   └── useDiscordStats.ts # Hook para estatísticas
├── services/           # Serviços de API
│   └── discordApi.ts   # Serviço da API do Discord
├── types/              # Definições de tipos
└── utils/              # Utilitários
```

## 🔧 Personalização

### Cores e Tema

As cores principais podem ser alteradas no `tailwind.config.js` ou diretamente nos componentes.

### Estatísticas Personalizadas

Para adicionar novas estatísticas, edite o arquivo `src/services/discordApi.ts` e adicione novos endpoints.

### Roles e Permissões

Configure as roles VIP e de influencer nos respectivos arquivos de serviço.

## 📱 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Netlify

1. Build: `npm run build`
2. Publish directory: `dist`
3. Configure as variáveis de ambiente

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte, entre em contato através do Discord da comunidade ou abra uma issue no GitHub.