import { z } from 'zod';
import { FALLBACK_LANGUAGE, createFlattenedTranslationMap, getCurrentLang, validateProps } from './helpers';

interface SetupTranslationsType<T extends object> {
  translations: T;
  translationsSchema: z.ZodSchema<T>;
  customTranslationsPerLanguage: { [language: string]: Partial<T>; };
  enforcedLanguage?: string;
}

const translationsSchema = z.object({
  userInfo: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

type TranslationsType = z.infer<typeof translationsSchema>;

const en: TranslationsType = {
  userInfo: 'User Info',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
};

// type MyTranslationsType = SetupTranslationsType<z.infer<typeof translationsSchema>>;


function setupTranslations<T extends object>({ translations, translationsSchema, customTranslationsPerLanguage, enforcedLanguage }: SetupTranslationsType<T>) {
  const hasCustomTranslations = customTranslationsPerLanguage && Object.keys(customTranslationsPerLanguage).length > 0;

  const currentLang = getCurrentLang({ enforcedLanguage, availableCustomLanguages: Object.keys(customTranslationsPerLanguage ?? {}) });
  if (currentLang !== FALLBACK_LANGUAGE && hasCustomTranslations) {
    const validatedTranslations = validateProps(customTranslationsPerLanguage?.[currentLang], translationsSchema);
    return createFlattenedTranslationMap(validatedTranslations);
  }

  const mergedTranslations = { ...translations, ...customTranslationsPerLanguage?.[currentLang] ?? {} };
  const validatedTranslations = validateProps(mergedTranslations, translationsSchema);
  return createFlattenedTranslationMap(validatedTranslations);
}



setupTranslations<TranslationsType>({ translations: en, translationsSchema, customTranslationsPerLanguage: { en: { email: 'Email Address' } } });


// const hasCustomTranslations = customTranslations && Object.keys(customTranslations).length > 0;
//   const currentLang = getCurrentLang({ enforcedLanguage, availableCustomLanguages: Object.keys(customTranslations ?? {}) });

//   if (currentLang !== FALLBACK_LANGUAGE && hasCustomTranslations) {
//     const validatedTranslations = validateProps(customTranslations?.[currentLang], TranslationSchema);
//     return createFlattenedTranslationMap(validatedTranslations);
//   }

//   const mergedTranslations = { ...translations, ...customTranslations?.[currentLang] ?? {} };
//   const validatedTranslations = validateProps(mergedTranslations, TranslationSchema);
//   return createFlattenedTranslationMap(validatedTranslations);