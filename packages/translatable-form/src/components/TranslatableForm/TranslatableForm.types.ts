import { z } from 'zod';

export const translationsSchema = z.object({
  userInfo: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  submit: z.string(),
  cancel: z.string(),
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
  fullUserInfo: z.string(),
  yes: z.string(),
  no: z.string(),
  enforceLanguage: z.string(),
  customTranslations: z.string(),
  formWithDefaultSettings: z.string(),
  formWithEnforcedLanguage: z.string(),
  formWithCustomTranslations: z.string(),
  formWithEnforcedLanguageAndCustomTranslations: z.string(),
});

export type TranslationsType = z.infer<typeof translationsSchema>;

export type CustomTranslationsProps<T> = {
  enforcedLanguage?: string;
  customTranslationsPerLanguage?: { [language: string]: Partial<T> };
};