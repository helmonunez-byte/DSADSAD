@@ .. @@
   const handleJoinDiscord = () => {
-    // Aqui seria o link real do Discord
-    window.open('https://discord.gg/40sabores', '_blank');
+    window.open('https://discord.gg/centraldaweb', '_blank');
   };

@@ .. @@
         {/* Main Logo */}
         <div className="mb-8">
           <div className="relative inline-block">
             <img
               src="https://images.pexels.com/photos/1666999/pexels-photo-1666999.jpeg?auto=compress&cs=tinysrgb&w=300"
-              alt="40 Sabores Logo"
+              alt="Central da Web Logo"
               className="w-32 h-32 mx-auto rounded-full border-4 border-red-600 shadow-2xl"
             />
             {/* Santa Hat Effect */}
             <div className="absolute -top-6 -right-2 text-4xl">🎅</div>
           </div>
           <h1 className="mt-6 text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
-            40 Sabores
+            Central da Web
           </h1>
           <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
-            A comunidade mais saborosa do Discord
+            A melhor comunidade do Discord
           </p>
         </div>

@@ .. @@
             <div className="text-3xl font-bold text-white mb-2">
-              {loading ? '...' : stats.members_total.toLocaleString()}
+              {loading ? '...' : stats.totalMembers.toLocaleString()}
             </div>
             <div className="text-gray-300">Membros</div>
           </div>
@@ .. @@
             <div className="text-3xl font-bold text-white mb-2">
-              {loading ? '...' : stats.messages_total.toLocaleString()}
+              {loading ? '...' : stats.onlineMembers.toLocaleString()}
             </div>
-            <div className="text-gray-300">Mensagens no servidor</div>
+            <div className="text-gray-300">Membros Online</div>
           </div>
           
           <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:border-red-600/50 transition-colors">
@@ .. @@
             <div className="text-3xl font-bold text-white mb-2">
-              {loading ? '...' : stats.staff_count}
+              {loading ? '...' : stats.voiceMembers}
             </div>
-            <div className="text-gray-300">Staff's</div>
+            <div className="text-gray-300">Em Call/Vocal</div>
           </div>
         </div>