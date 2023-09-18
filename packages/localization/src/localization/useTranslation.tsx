import { useAtom } from 'jotai';
import { translationMapAtom } from './localizationStore';

export function replaceWithParams(
  text: string,
  params: Record<string, string>
) {
  return text.replace(/{([^}]+)}/g, (_, key) => params[key] || '');
}

export const useTranslation = () => {
  const [translationMap] = useAtom(translationMapAtom);

  const translate = (key: string, params?: Record<string, string>): string => {
    if (!translationMap) return key;

    const translatedText = translationMap?.get(key);

    if (translatedText && params && Object.keys(params).length > 0) {
      return replaceWithParams(translatedText, params);
    }

    const translation = translationMap?.get(key);
    if (translation) return translation;

    console.warn('translation key missing:', key);
    return key;
  };

  return {
    t: translate,
  };
};
