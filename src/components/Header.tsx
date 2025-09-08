@@ .. @@
 import React, { useState } from 'react';
 import { Search, Menu, X, User } from 'lucide-react';
+import { useAuth } from '../hooks/useAuth';

 const Header: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');
+  const { user, isAuthenticated, login, logout } = useAuth();

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

@@ .. @@
   };

-  const handleLogin = () => {
-    // Simular login com Discord
-    alert('Redirecionando para login com Discord...');
-    // window.location.href = '/api/auth/discord';
-  };
   return (
     <header className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ .. @@
           {/* Logo */}
           <div className="flex-shrink-0">
             <img
               src="https://images.pexels.com/photos/1666999/pexels-photo-1666999.jpeg?auto=compress&cs=tinysrgb&w=200"
-              alt="40 Sabores"
+              alt="Central da Web"
               className="h-10 w-10 rounded-full border-2 border-red-600"
             />
           </div>

@@ .. @@
           </div>

-          {/* Login Button */}
+          {/* Auth Section */}
           <div className="hidden md:flex">
-            <button 
-              onClick={handleLogin}
-              className="flex items-center gap-2 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors"
-            >
-              <User className="w-4 h-4" />
-              Entrar
-            </button>
+            {isAuthenticated ? (
+              <div className="flex items-center gap-4">
+                <div className="flex items-center gap-2">
+                  <img
+                    src={user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : '/default-avatar.png'}
+                    alt={user?.username}
+                    className="w-8 h-8 rounded-full"
+                  />
+                  <span className="text-white font-medium">{user?.username}</span>
+                </div>
+                <button
+                  onClick={logout}
+                  className="px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
+                >
+                  Sair
+                </button>
+              </div>
+            ) : (
+              <button 
+                onClick={login}
+                className="flex items-center gap-2 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors"
+              >
+                <User className="w-4 h-4" />
+                Entrar com Discord
+              </button>
+            )}
           </div>

@@ .. @@
             <a href="#influencers" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
               Influencers
             </a>
-            <button 
-              onClick={handleLogin}
-              className="w-full mt-4 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2"
-            >
-              <User className="w-4 h-4" />
-              Entrar
-            </button>
+            {isAuthenticated ? (
+              <div className="mt-4 space-y-2">
+                <div className="flex items-center gap-2 p-2">
+                  <img
+                    src={user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : '/default-avatar.png'}
+                    alt={user?.username}
+                    className="w-8 h-8 rounded-full"
+                  />
+                  <span className="text-white font-medium">{user?.username}</span>
+                </div>
+                <button
+                  onClick={logout}
+                  className="w-full px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
+                >
+                  Sair
+                </button>
+              </div>
+            ) : (
+              <button 
+                onClick={login}
+                className="w-full mt-4 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2"
+              >
+                <User className="w-4 h-4" />
+                Entrar com Discord
+              </button>
+            )}
           </div>
         </div>
       )}