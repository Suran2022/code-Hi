import React from 'react';
import { Button } from './Button';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  language: Language;
  onFinish: () => void;
}

export const Step5Finish: React.FC<Props> = ({ language, onFinish }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="text-8xl mb-4 select-none"
      >
        🎉
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-[#F5F5DC]"
      >
        {t.allSet}
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button onClick={onFinish} icon>
            {t.startUsing}
        </Button>
      </motion.div>
    </div>
  );
};