export interface Translations {
  [key: string]: Record<string, any>;
}

export type translationMap = Map<string, string>;

export interface LocalizationConfigProps {
  translations?: Record<string, any>;
  enforcedLang?: string;
  customTranslations?: Record<string, any>;
}
