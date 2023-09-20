import { ReactNode } from 'react';
import { z } from 'zod';

export const TranslationSchema = z.object({
  userInfo: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  errors: z.object({
    name: z.string(),
    email: z.object({
      required: z.string(),
      pattern: z.string(),
    }),
    phone: z.object({
      required: z.string(),
      pattern: z.string(),
    }),
  }),
});

export type TranslationsType = z.infer<typeof TranslationSchema>;

export interface TranslationsProps {
  userTranslations?: Partial<TranslationsType>;
  enforcedLang?: string;
}

export interface CreateTranslationsProps {
  translations: TranslationsType;
  userTranslations: Partial<TranslationsType>;
  enforcedLang?: string;
}

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
