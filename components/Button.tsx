import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, icon = false, className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-8 py-3 rounded-full 
        bg-[#556B2F] text-[#F5F5DC] 
        font-medium text-lg 
        flex items-center justify-center gap-2 
        shadow-lg hover:shadow-xl hover:bg-[#465a26] 
        transition-all duration-300
        ${className || ''}
      `}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </motion.button>
  );
};