import { useCallback, useEffect, useState } from 'react';
import { LocalizationConfigProps, Translations } from './localization.types';
import { localizationDefaultProps } from './localizationDefaultProps';
import { useAtom } from 'jotai';
import { currentLangAtom, translationMapAtom } from './localizationStore';

export function getBrowserLang(): string {
  const lang = navigator.languages?.[0] ?? navigator.language;
  return lang.split('-')[0].toLocaleLowerCase();
}

interface DetermineCurrentLangProps {
  translations?: Translations;
  enforcedLang?: string;
  customTranslations?: Translations;
}

export function determineCurrentLang({
  enforcedLang,
  translations,
  customTranslations,
}: DetermineCurrentLangProps): string {
  const hasTranslations = translations && Object.keys(translations).length > 0;
  const hasCustomTranslations =
    customTranslations && Object.keys(customTranslations).length > 0;

  if (!hasTranslations || !enforcedLang) {
    return localizationDefaultProps.fallbackLanguage;
  }

  // Check if enforced lang is available
  if (enforcedLang) {
    if (hasCustomTranslations) {
      if (!customTranslations[enforcedLang] && !translations[enforcedLang]) {
        throw new Error(
          `Could not find translations for enforced lang ${enforcedLang}`
        );
      }
    }
    if (!translations[enforcedLang]) {
      throw new Error(
        `Could not find translations for enforced lang ${enforcedLang}`
      );
    }
    return enforcedLang;
  }

  // Check if user lang is available
  const userLang = getBrowserLang();
  if (userLang && hasCustomTranslations && customTranslations[userLang])
    return userLang;
  if (userLang && translations[userLang]) return userLang;

  // Fallback to first available lang
  if (hasCustomTranslations) return Object.keys(customTranslations)[0];
  return Object.keys(translations)[0];
}

export function createFlattenedTranslationMap(
  translations: Record<string, any>,
  prevKey: string = '',
  map: Map<string, any> = new Map()
) {
  for (const entry in translations) {
    const newKey = prevKey ? `${prevKey}.${entry}` : entry;
    if (typeof translations[entry] === 'string') {
      map.set(newKey, translations[entry]);
    } else {
      createFlattenedTranslationMap(translations[entry], newKey, map);
    }
  }
  return map;
}

export function initLocalization({
  translations,
  enforcedLang,
  customTranslations,
}: LocalizationConfigProps) {
  const [, setLanguageAtom] = useAtom(currentLangAtom);
  const [, setTranslationMapAtom] = useAtom(translationMapAtom);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized) return;
    if (!translations || Object.keys(translations).length === 0) return;

    const lang = determineCurrentLang({
      translations,
      enforcedLang,
      customTranslations,
    });

    const translationsCurrentLang = translations?.[lang] ?? {};
    const customTranslationsCurrentLang = customTranslations?.[lang] ?? {};
    const map = createFlattenedTranslationMap({
      ...translationsCurrentLang,
      ...customTranslationsCurrentLang,
    });
    if (lang && map.size > 0) {
      console.log('useLocalization', { lang, map });
      setLanguageAtom(lang);
      setTranslationMapAtom(map);
      setIsInitialized(true);
    }
  }, []);

  // const init = () => {
  //   if (isInitialized) return;
  //   if (!translations || Object.keys(translations).length === 0) return;

  //   const lang = determineCurrentLang({
  //     translations,
  //     enforcedLang,
  //     customTranslations,
  //   });

  //   const translationsCurrentLang = translations?.[lang] ?? {};
  //   const customTranslationsCurrentLang = customTranslations?.[lang] ?? {};
  //   const map = createFlattenedTranslationMap({
  //     ...translationsCurrentLang,
  //     ...customTranslationsCurrentLang,
  //   });
  //   if (lang && map.size > 0) {
  //     console.log('useLocalization', { lang, map });
  //     setLanguageAtom(lang);
  //     setTranslationMapAtom(map);
  //     setIsInitialized(true);
  //   }
  // };
}
