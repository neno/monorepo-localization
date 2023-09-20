import { useContext } from 'react';
import { replaceWithParams } from './helpers';
import { TranslationsContext } from './TranslationsContext';

export function useTranslations() {
  const { translationsMap } = useContext(TranslationsContext);

  const translate = (key: string, params?: Record<string, string>): string => {
    console.log('translate', translationsMap);
    
    if (!translationsMap) return key;

    const translatedText = translationsMap?.get(key);

    if (translatedText && params && Object.keys(params).length > 0) {
      return replaceWithParams(translatedText, params);
    }

    const translation = translationsMap?.get(key);
    if (translation) return translation;

    console.warn('translation key missing:', key);
    return key;
  };

  return { t: translate };
}
