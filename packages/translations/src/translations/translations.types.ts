import { ReactNode } from 'react';
import { z } from 'zod';

// export type TranslationsType = z.infer<typeof TranslationSchema>;

// export type CustomTranslationTypeByLanguage = {
//   [language: string]: Partial<TranslationsType>;
// };

// export interface TranslationsProps {
//   customTranslations?: CustomTranslationTypeByLanguage;
//   enforcedLanguage?: string;
// }
export type CustomTranslationsPerLanguageType<T> = { [language: string]: Partial<T>; };

export type SetupTranslationsType<T extends object> = {
  translations: T;
  translationsSchema: z.ZodSchema<T>;
  customTranslationsPerLanguage?: CustomTranslationsPerLanguageType<T>;
  enforcedLanguage?: string;
}

export type GetCurrentLangProps = {
  enforcedLanguage?: string;
  availableCustomLanguages?: string[];
}

// export interface CreateTranslationsProps extends TranslationsProps {
//   translations: TranslationsType;
// }

export type TranslationsMapType = Map<string, string>;



export interface TranslationsContextProps {
  translationsMap: TranslationsMapType;
}

export interface TranslationsContextProviderProps extends TranslationsContextProps {
  children: ReactNode;
}
