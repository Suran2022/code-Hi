import React from 'react';
import { Button } from './Button';
import { Select } from './Select';
import { Language, ThemeOption, KeymapOption } from '../types';
import { TRANSLATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Keyboard, Palette } from 'lucide-react';

interface Props {
  language: Language;
  theme: ThemeOption;
  setTheme: (t: ThemeOption) => void;
  keymap: KeymapOption;
  setKeymap: (k: KeymapOption) => void;
  onNext: () => void;
}

export const Step3Theme: React.FC<Props> = ({ 
  language, theme, setTheme, keymap, setKeymap, onNext 
}) => {
  const t = TRANSLATIONS[language];

  // Colors for previewing the theme buttons
  const themeStyles = {
    [ThemeOption.OLIVE]: 'bg-[#556B2F] border-[#F5F5DC]',
    [ThemeOption.BROWN]: 'bg-[#3E2723] border-[#EFEBE9]',
    [ThemeOption.MONOCHROME]: 'bg-black border-white',
  };

  const themeTextColors = {
     [ThemeOption.OLIVE]: 'text-[#F5F5DC]',
     [ThemeOption.BROWN]: 'text-[#EFEBE9]',
     [ThemeOption.MONOCHROME]: 'text-white',
  };

  const keymapOptions = Object.values(KeymapOption).map(opt => ({
    id: opt,
    label: opt === 'idea' ? 'IntelliJ IDEA' : (opt.charAt(0).toUpperCase() + opt.slice(1)),
    icon: <Keyboard className="w-4 h-4" />
  }));

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto px-4 justify-center">
      <h2 className="text-3xl font-semibold text-[#F5F5DC] mb-12 text-center">
        {t.appearance}
      </h2>

      <div className="grid md:grid-cols-2 gap-16 w-full mb-10">
        {/* Theme Selection Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-zinc-700 pb-2">
            <Palette className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xl text-zinc-300 font-medium">{t.theme}</h3>
          </div>
          
          <div className="grid gap-4">
            {Object.values(ThemeOption).map((opt) => (
              <motion.button
                key={opt}
                onClick={() => setTheme(opt)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200
                  ${theme === opt ? 'border-[#556B2F] bg-[#556B2F]/10' : 'border-zinc-700 hover:border-zinc-600 bg-zinc-800/30'}
                `}
              >
                {/* Visual Preview Swatch */}
                <div className={`w-12 h-12 rounded-full border-2 shadow-sm flex items-center justify-center ${themeStyles[opt]}`}>
                    <span className={`text-xs font-bold ${themeTextColors[opt]}`}>Ag</span>
                </div>
                <div>
                  <div className="text-[#F5F5DC] font-medium">{t.themeNames[opt]}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Keymap Selection Section */}
        <div className="space-y-6 flex flex-col">
          <div className="flex items-center gap-2 border-b border-zinc-700 pb-2">
             <Keyboard className="w-5 h-5 text-zinc-400" />
             <h3 className="text-xl text-zinc-300 font-medium">{t.keymap}</h3>
          </div>

          <div className="space-y-2">
             <label className="text-sm text-zinc-500">Preset Profile</label>
             <Select 
                options={keymapOptions} 
                value={keymap} 
                onChange={(val) => setKeymap(val as KeymapOption)} 
             />
          </div>
          
          {/* Editor Preview Mockup */}
          <div className="flex-grow mt-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-500 shadow-inner">
             <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="space-y-1 opacity-80">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">config</span> = <span className="text-green-400">await</span> <span className="text-yellow-400">Winter</span>.setup();</p>
                <p>&nbsp;</p>
                <p className="text-zinc-600">// User preferences</p>
                <p>config.<span className="text-blue-300">apply</span>({'{'}</p>
                <p className="pl-4">theme: <span className="text-orange-300">'{theme}'</span>,</p>
                <p className="pl-4">keymap: <span className="text-orange-300">'{keymap}'</span>,</p>
                <p>{'}'});</p>
             </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-auto">
        <Button onClick={onNext} icon>
          {t.next}
        </Button>
      </div>
    </div>
  );
};