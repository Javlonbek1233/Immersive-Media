/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Flower2 } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
}

export default function App() {
  const [petals, setPetals] = useState<Petal[]>([]);

  // Initialize petals
  useEffect(() => {
    const newPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <main className="viewport overflow-hidden font-sans">
      {/* Background Atmosphere */}
      <div className="atmosphere" />
      
      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="main-container"
      >
        {/* Sidebar */}
        <div className="sidebar">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="character-name"
            >
              Moonlit<br /><span className="italic">Sakura</span>
            </motion.h1>
            <p className="character-title">Ethereal Guardian of Night</p>
            
            <p className="text-blue-100/60 text-xs italic leading-relaxed mb-8">
              "Beneath the silver boughs, where moonlight whispers to the falling stars."
            </p>

            <div className="stats-grid">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="stat-row"
              >
                <div className="stat-header">
                  <span className="stat-label">Lunar Energy</span>
                  <span className="text-[10px] text-white/40 font-mono">85%</span>
                </div>
                <div className="stat-bar-bg">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="stat-bar-fill"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="stat-row"
              >
                <div className="stat-header">
                  <span className="stat-label">Aura Clarity</span>
                  <span className="text-[10px] text-white/40 font-mono">60%</span>
                </div>
                <div className="stat-bar-bg">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="stat-bar-fill"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="stat-row"
              >
                <div className="stat-header">
                  <span className="stat-label">Soul Resonance</span>
                  <span className="text-[10px] text-white/40 font-mono">92%</span>
                </div>
                <div className="stat-bar-bg">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="stat-bar-fill"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="action-row"
          >
            <div className="btn-circle"><Moon className="w-4 h-4" /></div>
            <div className="btn-circle text-pink-300"><Flower2 className="w-4 h-4" /></div>
            <div className="btn-circle"><Sparkles className="w-4 h-4" /></div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Background Image within container */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2574&auto=format&fit=crop"
              alt="Night Scene"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,10,0.8)] via-transparent to-transparent" />
          </motion.div>

          {/* Silhouette/Visual Representation */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative z-10 w-[240px] h-[420px] mb-[-40px] bg-gradient-to-b from-blue-200/20 to-blue-400/5 rounded-t-[120px] backdrop-blur-sm border border-white/10 flex flex-col items-center justify-start p-12 overflow-hidden"
          >
            <div className="w-full h-full opacity-40 mix-blend-overlay">
               {/* This represents the character visual placeholder */}
               <Sparkles className="w-full h-full text-white animate-pulse" />
            </div>
          </motion.div>

          <div className="nav-hint">LUNAR PROTOCOL</div>
          
          {/* Petals confined to content area or full screen? Content area looks cleaner */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{ y: -50, x: `${petal.x}%`, opacity: 0, rotate: petal.rotation }}
                animate={{ 
                  y: '120%', 
                  x: `${petal.x + (Math.random() * 10 - 5)}%`,
                  opacity: [0, 0.6, 0],
                  rotate: petal.rotation + 360 
                }}
                transition={{ 
                  duration: petal.duration, 
                  repeat: Infinity, 
                  delay: petal.delay,
                  ease: "linear"
                }}
                className="absolute"
                style={{ width: petal.size, height: petal.size }}
              >
                <Flower2 className="text-[#ffb7c5] fill-current w-full h-full opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Aesthetic bottom text */}
      <div className="absolute bottom-8 text-[10px] opacity-20 letter-spacing-[8px] uppercase tracking-[0.6em] z-0">
        Atmospheric Data V.02 // Lunar Guardian
      </div>

      {/* Scanline/Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}
