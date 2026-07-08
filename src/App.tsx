import React from 'react';
import { Globe, ArrowRight, Instagram, Twitter, Copy, User } from 'lucide-react';

export default function App() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("6UGNg119LV6YjSCQ5K6Z6jsLLLetpMJ1vPdhiU8qpump");
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative font-sans text-white">
      {/* Background Image (Animated) */}
      <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        <img
          src="https://d.uguu.se/lFtqySXO.jpg"
          alt="Bull Background"
          className="absolute inset-0 w-full h-full object-cover origin-center animate-slow-zoom mix-blend-screen opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0"></div>
      </div>

      {/* 
        HERO SECTION 
        Takes full viewport height as requested
      */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-white font-semibold text-lg">
                <img src="https://d.uguu.se/lFtqySXO.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                <span>$CURB</span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#price" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Price</a>
                <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content Area */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center h-[500px] -translate-y-12">
          <h1 
            className="text-6xl md:text-7xl text-white mb-6 tracking-tight italic"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The Solana Bull
          </h1>
          
          <div className="max-w-xl w-full flex justify-center">
            <a href="https://x.com/CryptoCurb" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-8 py-4 flex items-center gap-3 text-white text-base font-medium hover:bg-white/10 transition-colors border border-white/5 group">
              Join our community
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </main>

        {/* Social Icons Footer (Hero bound) */}
        <div className="w-full relative z-10 flex flex-col items-center gap-4 pb-12 mt-auto">
          <div className="flex justify-center gap-4">
            <a href="https://x.com/CryptoCurb" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all" aria-label="X">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href="https://solanabullsol.com/" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all" aria-label="Website">
              <Globe size={20} />
            </a>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Fan Made Website</p>
        </div>
      </div>

      {/* 
        $CURB MEMECOIN SECTION
        Flows below the hero screen
      */}
      <div className="relative z-10 bg-black/60 backdrop-blur-2xl border-t border-white/10 pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
              $CURB (THE SOLANA BULL)
            </h2>
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3 inline-flex max-w-full overflow-x-auto mx-auto">
              <span className="text-white/50 text-sm whitespace-nowrap">CA:</span>
              <code className="text-white text-xs md:text-sm font-mono whitespace-nowrap">6UGNg119LV6YjSCQ5K6Z6jsLLLetpMJ1vPdhiU8qpump</code>
              <button 
                onClick={copyToClipboard} 
                className="text-white/80 hover:text-white p-1"
                aria-label="Copy Contract Address"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>

          {/* DexScreener Live Chart */}
          <div id="price" className="w-full liquid-glass rounded-3xl p-2 mb-20 h-[500px] md:h-[600px]">
            <iframe 
              src="https://dexscreener.com/solana/6UGNg119LV6YjSCQ5K6Z6jsLLLetpMJ1vPdhiU8qpump?embed=1&theme=dark" 
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "1.25rem" }}
              title="DexScreener Live Chart"
            ></iframe>
          </div>

          {/* About Section */}
          <div id="about" className="max-w-3xl text-center mb-24">
            <div className="liquid-glass p-8 md:p-12 rounded-3xl flex flex-col items-center gap-6 border border-white/5">
              <h3 className="text-3xl md:text-4xl text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>About $CURB</h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                $CURB is more than just a memecoin; it's the heartbeat of the Solana Bull. 
                Born from the energy of the community and the legendary CryptoCurb, it embodies the relentless, 
                unstoppable force of the Solana ecosystem. We are here to charge forward, leaving the bears in the dust. 
                Join the stampede and be part of the strongest community in crypto.
              </p>
              <a 
                href="https://x.com/CryptoCurb/status/2073844682031853905?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 liquid-glass rounded-full px-6 py-3 flex items-center gap-2 text-white hover:text-black hover:bg-white transition-all border border-white/10"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                <span className="text-sm font-medium">View Announcement on X</span>
              </a>
            </div>
          </div>

          {/* Web Creator Button */}
          <a 
            href="https://x.com/Mralien84420318" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 hover:text-white/90 transition-colors border border-white/5"
          >
            <User size={14} />
            <span>Web Creator</span>
          </a>
          
        </div>
      </div>
    </div>
  );
}
