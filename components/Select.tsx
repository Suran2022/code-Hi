import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  sub?: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.id === value);

  // Close click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between p-4 
          bg-zinc-800/50 border rounded-xl transition-all duration-200 text-left
          ${isOpen ? 'border-[#556B2F] ring-1 ring-[#556B2F]/50' : 'border-zinc-700 hover:border-zinc-500'}
        `}
      >
        <div className="flex items-center gap-3 overflow-hidden">
            {selectedOption?.icon && <span className="text-zinc-400">{selectedOption.icon}</span>}
            <span className="text-[#F5F5DC] font-medium truncate">
            {selectedOption ? selectedOption.label : placeholder || 'Select...'}
            </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-zinc-800 transition-colors text-left group border-b border-zinc-800/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                   {option.icon && <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{option.icon}</span>}
                   <div className="flex flex-col">
                    <span className={`text-base font-medium ${value === option.id ? 'text-[#556B2F]' : 'text-[#F5F5DC]'}`}>
                        {option.label}
                    </span>
                    {option.sub && <span className="text-xs text-zinc-500">{option.sub}</span>}
                   </div>
                </div>
                {value === option.id && <Check className="w-4 h-4 text-[#556B2F]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};