import { z } from 'zod';
import { CreateTranslationsProps, CustomTranslationTypeByLanguage, GetCurrentLangProps, TranslationSchema, TranslationsType } from './translations.types';
import { FALLBACK_LANGUAGE } from './translations.const';

export function getBrowserLang(): string {
  const lang = navigator.languages?.[0] ?? navigator.language;
  const browserLang = lang.includes('-') ? lang.split('-')[0] : lang;
  return browserLang.toLocaleLowerCase();
}

export function isKeyAvailable<T>(key: string, data: T extends Record<string, any> ? T : never) {
  return key && Object.keys(data).includes(key);
}

export function getCurrentLang({ enforcedLanguage, availableCustomLanguages = [] }: GetCurrentLangProps): string {
  if (enforcedLanguage) {
    if (availableCustomLanguages.includes(enforcedLanguage) || enforcedLanguage === FALLBACK_LANGUAGE) {
      return enforcedLanguage;
    }
  }

  const userLang = getBrowserLang();
  if (userLang) {
    if (availableCustomLanguages?.includes(userLang)) {
      return userLang;
    }
  }

  return FALLBACK_LANGUAGE;
}

export function createFlattenedTranslationMap(
  translations: Record<string, any>,
  prevKey: string = '',
  map: Map<string, string> = new Map()
) {
  for (const entry of Object.keys(translations)) {
    const newKey = prevKey ? `${prevKey}.${entry}` : entry;

    if (typeof translations[entry] === 'string') {
      map.set(newKey, translations[entry]);
    } else {
      createFlattenedTranslationMap(translations[entry], newKey, map);
    }
  }
  return map;
}

// TODO: Error handling? Should we etract this function and move it to a utils package?
function validateProps<T>(props: T, schema: z.ZodSchema<T>) {
  const validatedProps = schema.safeParse(props);
  if (!validatedProps.success) {
    throw validatedProps.error;
  }
  return validatedProps.data;
}

export function createTranslationsMap({ translations, enforcedLanguage, customTranslations }: CreateTranslationsProps) {
  const hasCustomTranslations = customTranslations && Object.keys(customTranslations).length > 0;
  const currentLang = getCurrentLang({ enforcedLanguage, availableCustomLanguages: Object.keys(customTranslations ?? {}) });

  if (currentLang !== FALLBACK_LANGUAGE && hasCustomTranslations) {
    const validatedTranslations = validateProps(customTranslations?.[currentLang], TranslationSchema);
    return createFlattenedTranslationMap(validatedTranslations);
  }

  const mergedTranslations = { ...translations, ...customTranslations?.[currentLang] ?? {} };
  const validatedTranslations = validateProps(mergedTranslations, TranslationSchema);
  return createFlattenedTranslationMap(validatedTranslations);
}

export function replaceWithParams(
  text: string,
  params: Record<string, string>
) {
  return text.replace(/{([^}]+)}/g, (_, key) => params[key] || '');
}
