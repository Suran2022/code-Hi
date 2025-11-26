import { Language, Translation, ThemeOption } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    welcome: "Winter",
    getStarted: "Get Started",
    selectLanguage: "Select Language",
    next: "Next",
    appearance: "Customize Appearance",
    theme: "Color Theme",
    keymap: "Keymap Binding",
    importSettings: "Import Settings",
    importFrom: (editor) => `Import from ${editor}`,
    skip: "Skip for now",
    detecting: "Scanning for existing editors...",
    allSet: "You're all set!",
    startUsing: "Start Using Winter",
    themeNames: {
      [ThemeOption.OLIVE]: "Olive & Cream",
      [ThemeOption.BROWN]: "Mocha & Beige",
      [ThemeOption.MONOCHROME]: "Classic Mono",
    }
  },
  [Language.ZH_CN]: {
    welcome: "Winter",
    getStarted: "Get Started",
    selectLanguage: "选择语言",
    next: "下一步",
    appearance: "外观设置",
    theme: "颜色主题",
    keymap: "快捷键方案",
    importSettings: "导入设置",
    importFrom: (editor) => `从 ${editor} 导入`,
    skip: "暂时跳过",
    detecting: "正在扫描已安装的编辑器...",
    allSet: "设置完成！",
    startUsing: "开始使用 Winter",
    themeNames: {
      [ThemeOption.OLIVE]: "橄榄绿 & 米白",
      [ThemeOption.BROWN]: "深棕 & 浅米",
      [ThemeOption.MONOCHROME]: "黑 & 白",
    }
  },
  [Language.ZH_TW]: {
    welcome: "Winter",
    getStarted: "Get Started",
    selectLanguage: "選擇語言",
    next: "下一步",
    appearance: "外觀設定",
    theme: "色彩主題",
    keymap: "快捷鍵方案",
    importSettings: "匯入設定",
    importFrom: (editor) => `從 ${editor} 匯入`,
    skip: "暫時跳過",
    detecting: "正在掃描已安裝的編輯器...",
    allSet: "設定完成！",
    startUsing: "開始使用 Winter",
    themeNames: {
      [ThemeOption.OLIVE]: "橄欖綠 & 米白",
      [ThemeOption.BROWN]: "深棕 & 淺米",
      [ThemeOption.MONOCHROME]: "黑 & 白",
    }
  },
  [Language.JA]: {
    welcome: "Winter",
    getStarted: "Get Started",
    selectLanguage: "言語の選択",
    next: "次へ",
    appearance: "外観の設定",
    theme: "カラーテーマ",
    keymap: "キーマップ",
    importSettings: "設定のインポート",
    importFrom: (editor) => `${editor} からインポート`,
    skip: "今はスキップ",
    detecting: "エディタをスキャン中...",
    allSet: "設定が完了しました！",
    startUsing: "Winter を始める",
    themeNames: {
      [ThemeOption.OLIVE]: "オリーブ & クリーム",
      [ThemeOption.BROWN]: "モカ & ベージュ",
      [ThemeOption.MONOCHROME]: "モノクローム",
    }
  }
};