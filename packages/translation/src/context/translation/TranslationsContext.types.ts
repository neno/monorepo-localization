import { ReactNode } from 'react';

export type Translations = Record<string, string>;

export type TranslationsMapType = Map<string, string>;

export interface TranslationsContextProps {
  currentLanguage: string;
  // setCurrentLanguage: (language: string) => void;
  translationsMap: TranslationsMapType;
  // setTranslationsMap: (map: TranslationsMapType) => void;
}

export interface TranslationsContextProviderProps extends TranslationsContextProps {
  children: ReactNode;
}
