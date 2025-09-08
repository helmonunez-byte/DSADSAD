@@ .. @@
 import { useState, useEffect } from 'react';
-import { CommunityStats } from '../types';
+import { discordApi, ServerStats } from '../services/discordApi';

-// Hook para integração futura com Discord Bot
 export const useDiscordStats = () => {
-  const [stats, setStats] = useState<CommunityStats>({
-    members_total: 1247 + Math.floor(Math.random() * 100),
-    members_online: 324 + Math.floor(Math.random() * 50),
-    messages_total: 45892 + Math.floor(Math.random() * 1000),
-    staff_count: 12,
-    last_updated: new Date(),
+  const [stats, setStats] = useState<ServerStats>({
+    totalMembers: 0,
+    onlineMembers: 0,
+    voiceMembers: 0,
+    lastUpdated: new Date(),
   });

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
-    // Simulação de dados - aqui será integrado com API do Discord
     const fetchStats = async () => {
       setLoading(true);
       try {
-        // TODO: Implementar chamada real para API
-        // const response = await fetch('/api/discord/stats');
-        // const data = await response.json();
+        const data = await discordApi.getServerStats();
+        setStats(data);
+        setError(null);
         
-        // Simulação de atualização em tempo real
+        // Atualização em tempo real a cada 30 segundos
         const interval = setInterval(() => {
-          setStats(prev => ({
-            ...prev,
-            members_online: Math.floor(Math.random() * 50) + 300,
-            messages_total: prev.messages_total + Math.floor(Math.random() * 10),
-            last_updated: new Date(),
-          }));
-        }, 10000); // Atualiza a cada 10 segundos
+          fetchStats();
+        }, 30000);

         return () => clearInterval(interval);
       } catch (err) {
@@ .. @@
   const refreshStats = async () => {
     setLoading(true);
     try {
-      // TODO: Implementar refresh manual
-      setStats(prev => ({
-        ...prev,
-        last_updated: new Date(),
-      }));
+      const data = await discordApi.getServerStats();
+      setStats(data);
+      setError(null);
     } catch (err) {
       setError(err instanceof Error ? err.message : 'Erro ao atualizar estatísticas');
     } finally {