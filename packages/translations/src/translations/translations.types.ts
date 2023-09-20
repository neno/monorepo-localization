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

export type CustomTranslationTypeByLanguage = {
  [language: string]: Partial<TranslationsType>;
};

export interface TranslationsProps {
  customTranslations?: CustomTranslationTypeByLanguage;
  enforcedLanguage?: string;
}

export type GetCurrentLangProps = {
  enforcedLanguage?: string;
  availableCustomLanguages?: string[];
}

export interface CreateTranslationsProps extends TranslationsProps {
  translations: TranslationsType;
}

export type TranslationsMapType = Map<string, string>;

export interface TranslationsContextProps {
  translationsMap: TranslationsMapType;
}

export interface TranslationsContextProviderProps extends TranslationsContextProps {
  children: ReactNode;
}
