export enum Language {
  EN = 'en',
  ZH_CN = 'zh-cn',
  ZH_TW = 'zh-tw',
  JA = 'ja'
}

export enum ThemeOption {
  OLIVE = 'olive',
  BROWN = 'brown',
  MONOCHROME = 'monochrome'
}

export enum KeymapOption {
  VSCODE = 'vscode',
  GITHUB = 'github',
  IDEA = 'idea'
}

export interface DetectedEditor {
  id: string;
  name: string;
  icon: string; // simpler to just use a string identifier for the icon
}

export interface Translation {
  welcome: string;
  getStarted: string;
  selectLanguage: string;
  next: string;
  appearance: string;
  theme: string;
  keymap: string;
  importSettings: string;
  importFrom: (editor: string) => string;
  skip: string;
  detecting: string;
  allSet: string;
  startUsing: string;
  themeNames: {
    olive: string;
    brown: string;
    monochrome: string;
  };
}