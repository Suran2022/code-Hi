import React from 'react';
import { Button } from './Button';
import { Select } from './Select';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Globe } from 'lucide-react';

interface Props {
  selectedLang: Language;
  onSelectLang: (lang: Language) => void;
  onNext: () => void;
}

export const Step2Language: React.FC<Props> = ({ selectedLang, onSelectLang, onNext }) => {
  const t = TRANSLATIONS[selectedLang];

  const languages = [
    { id: Language.EN, label: 'English', sub: 'English' },
    { id: Language.ZH_CN, label: '简体中文', sub: 'Simplified Chinese' },
    { id: Language.ZH_TW, label: '繁體中文', sub: 'Traditional Chinese' },
    { id: Language.JA, label: '日本語', sub: 'Japanese' },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full max-w-md mx-auto justify-center">
      <div className="w-full space-y-10 text-center">
        <h2 className="text-3xl font-semibold text-[#F5F5DC]">
          {t.selectLanguage}
        </h2>

        <div className="w-full text-left">
           <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1">Language</label>
           <Select 
             options={languages.map(l => ({ ...l, icon: <Globe className="w-4 h-4"/> }))}
             value={selectedLang}
             onChange={(val) => onSelectLang(val as Language)}
             className="w-full"
           />
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={onNext} icon>
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
};