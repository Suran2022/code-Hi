import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language, ThemeOption, KeymapOption } from './types';
import { Step1Welcome } from './components/Step1Welcome';
import { Step2Language } from './components/Step2Language';
import { Step3Theme } from './components/Step3Theme';
import { Step4Import } from './components/Step4Import';
import { Step5Finish } from './components/Step5Finish';

export default function App() {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState<Language>(Language.EN);
  const [theme, setTheme] = useState<ThemeOption>(ThemeOption.OLIVE);
  const [keymap, setKeymap] = useState<KeymapOption>(KeymapOption.VSCODE);

  // Determine global background color based on theme selection (only active after step 3 starts)
  const getBackgroundColor = () => {
    // Before step 3, use a neutral dark slate to make the Olive accent pop
    if (step < 3) return 'bg-zinc-900'; 
    
    switch (theme) {
      case ThemeOption.OLIVE: return 'bg-zinc-900'; // Default requested vibe
      case ThemeOption.BROWN: return 'bg-[#3E2723]'; // Deep Brown
      case ThemeOption.MONOCHROME: return 'bg-black'; // Pure Black
      default: return 'bg-zinc-900';
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  
  const handleFinish = () => {
    // Logic to actually launch the main app would go here
    console.log(`Winter Configured!\nLanguage: ${lang}\nTheme: ${theme}\nKeymap: ${keymap}`);
  };

  // Smoother "connected" transition variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    })
  };

  return (
    <div className={`w-screen h-screen overflow-hidden transition-colors duration-700 ease-in-out ${getBackgroundColor()} font-sans selection:bg-[#556B2F] selection:text-[#F5F5DC]`}>
      
      {/* Progress Indicator (Subtle) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-[#556B2F]" 
          initial={{ width: '0%' }}
          animate={{ width: `${(step / 5) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative w-full h-full max-w-5xl mx-auto px-4 py-8 flex flex-col">
        {/* Main Content Area */}
        <div className="flex-grow relative flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={step}
              custom={1} // Always moving forward in this wizard
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                filter: { duration: 0.3 }
              }}
              className="absolute inset-0 h-full w-full flex flex-col justify-center"
            >
              {step === 1 && <Step1Welcome onNext={nextStep} />}
              
              {step === 2 && (
                <Step2Language 
                  selectedLang={lang} 
                  onSelectLang={setLang} 
                  onNext={nextStep} 
                />
              )}
              
              {step === 3 && (
                <Step3Theme 
                  language={lang}
                  theme={theme}
                  setTheme={setTheme}
                  keymap={keymap}
                  setKeymap={setKeymap}
                  onNext={nextStep}
                />
              )}
              
              {step === 4 && (
                <Step4Import 
                  language={lang}
                  onNext={nextStep}
                />
              )}
              
              {step === 5 && (
                <Step5Finish 
                  language={lang}
                  onFinish={handleFinish}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Footer info (Step counter) */}
        <div className="absolute bottom-8 left-0 w-full flex items-center justify-center pointer-events-none">
            <div className="text-zinc-600 text-sm font-mono tracking-widest uppercase">
                Step {step} / 5
            </div>
        </div>
      </div>
    </div>
  );
}