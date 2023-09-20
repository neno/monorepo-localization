import { z } from 'zod';
import { CreateTranslationsProps, TranslationSchema, TranslationsType } from './translations.types';
import { FALLBACK_LANGUAGE } from './translations.const';

export function getBrowserLang(): string {
  const lang = navigator.languages?.[0] ?? navigator.language;
  const browserLang = lang.includes('-') ? lang.split('-')[0] : lang;
  return browserLang.toLocaleLowerCase();
}

export function isKeyAvailable<T>(key: string, data: T extends Record<string, any> ? T : never) {
  return key && Object.keys(data).includes(key);
}

export function determineCurrentLang({ translations, customTranslations, enforcedLang
}: CreateTranslationsProps): string {
  const hasTranslations = translations && Object.keys(translations).length > 0;
  const hasCustomTranslations =
    customTranslations && Object.keys(customTranslations).length > 0;

  if (!hasTranslations || !enforcedLang) {
    return FALLBACK_LANGUAGE;
  }

  // Check if enforced lang is available
  if (enforcedLang) {
    if ((hasCustomTranslations && isKeyAvailable(enforcedLang, customTranslations)) || isKeyAvailable(enforcedLang, translations)) {
      return enforcedLang;
    }
  }

  // Check if user lang is available
  const userLang = getBrowserLang();
  if (userLang) {
    if ((hasCustomTranslations && isKeyAvailable(userLang, customTranslations)) || isKeyAvailable(userLang, translations)) {
      return userLang;
    }
  }

  // use FALLBACK_LANGUAGE
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

export function createTranslationMap(translations: TranslationsType) {
  const validatedTranslations = validateProps(translations, TranslationSchema);
  return createFlattenedTranslationMap(validatedTranslations);
}
