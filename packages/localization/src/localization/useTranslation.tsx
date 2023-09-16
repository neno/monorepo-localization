import { useAtom } from 'jotai';
import { translationMapAtom } from './localizationStore';

export function replaceWithParams(
  text: string,
  params: Record<string, string>
) {
  return text.replace(/\${([^}]+)}/g, (_, key) => params[key] || '');
}

export const useTranslation = () => {
  const [translationMap] = useAtom(translationMapAtom);

  console.log('useTranslation', { translationMap });

  const translate = (key: string, params?: Record<string, string>): string => {
    console.log('translate', { key, translationMap });
    if (!translationMap) return key;

    const translatedText = translationMap?.get(key);

    if (translatedText && params && Object.keys(params).length > 0) {
      return replaceWithParams(translatedText, params);
    }

    return translationMap?.get(key) ?? key;
  };

  return {
    t: translate,
  };
};
