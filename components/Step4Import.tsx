import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Select } from './Select';
import { Language, DetectedEditor } from '../types';
import { TRANSLATIONS } from '../constants';
import { Loader2, AlertCircle, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  language: Language;
  onNext: () => void;
}

export const Step4Import: React.FC<Props> = ({ language, onNext }) => {
  const t = TRANSLATIONS[language];
  const [loading, setLoading] = useState(true);
  const [editors, setEditors] = useState<DetectedEditor[]>([]);
  const [selectedEditorId, setSelectedEditorId] = useState<string>('');

  useEffect(() => {
    // Simulate scanning file system
    const timer = setTimeout(() => {
      const foundEditors = [
        { id: 'cursor', name: 'Cursor', icon: 'C' },
        { id: 'kiro', name: 'Kiro', icon: 'K' },
        { id: 'trae', name: 'Trae', icon: 'T' },
        { id: 'vscode', name: 'VS Code', icon: 'V' }
      ];
      setEditors(foundEditors);
      if (foundEditors.length > 0) {
        setSelectedEditorId(foundEditors[0].id);
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleImport = () => {
    if (!selectedEditorId) return;
    
    // Simulate import delay
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        onNext();
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Loader2 className="w-12 h-12 text-[#556B2F] animate-spin" />
        <p className="text-lg text-zinc-400">{t.detecting}</p>
      </div>
    );
  }

  const editorOptions = editors.map(e => ({
    id: e.id,
    label: e.name,
    sub: 'Configuration detected',
    icon: <div className="w-6 h-6 rounded bg-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">{e.icon}</div>
  }));

  const selectedEditorName = editors.find(e => e.id === selectedEditorId)?.name || 'Editor';

  return (
    <div className="flex flex-col items-center h-full w-full max-w-md mx-auto justify-center">
      <div className="w-full space-y-12 text-center">
        <h2 className="text-3xl font-semibold text-[#F5F5DC]">
            {t.importSettings}
        </h2>

        {editors.length > 0 ? (
            <div className="w-full text-left space-y-2">
                <label className="block text-sm font-medium text-zinc-400 ml-1">Import from</label>
                <Select 
                    options={editorOptions}
                    value={selectedEditorId}
                    onChange={setSelectedEditorId}
                />
            </div>
        ) : (
            <div className="text-center text-zinc-500 py-8 flex flex-col items-center gap-4 border border-dashed border-zinc-700 rounded-xl bg-zinc-800/30">
                <AlertCircle className="w-10 h-10 opacity-50"/>
                <p>No existing editor configurations found.</p>
            </div>
        )}

        <div className="flex flex-col gap-4 w-full pt-4">
            <Button 
                onClick={handleImport} 
                disabled={editors.length === 0}
                className={editors.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            >
                {editors.length > 0 ? t.importFrom(selectedEditorName) : t.next}
            </Button>
            
            <button 
                onClick={onNext}
                className="px-8 py-3 rounded-full text-zinc-400 hover:text-[#F5F5DC] hover:bg-white/5 transition-all font-medium text-lg"
            >
                {t.skip}
            </button>
        </div>
      </div>
    </div>
  );
};