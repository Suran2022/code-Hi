import React from 'react';
import { Snowflake } from 'lucide-react';
import { Button } from './Button';

interface Props {
  onNext: () => void;
}

export const Step1Welcome: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
      <div className="flex flex-col items-center animate-fade-in-down">
        <div className="w-24 h-24 bg-zinc-800 rounded-3xl flex items-center justify-center shadow-2xl mb-6 border border-zinc-700">
          <Snowflake className="w-14 h-14 text-[#F5F5DC]" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-[#F5F5DC] font-sans">
          Winter
        </h1>
        <p className="mt-4 text-zinc-400 max-w-md">
          Code strictly. Code beautifully.
        </p>
      </div>

      <Button onClick={onNext} icon>
        Get Started
      </Button>
    </div>
  );
};