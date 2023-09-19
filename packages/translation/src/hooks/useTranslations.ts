import { useContext } from 'react';
import { TranslationsContext } from '../context/translation/translationsContext';
import { TranslationsMapType } from '../context/translation/TranslationsContext.types';

export function useTranslations() {
    const { translationsMap } = useContext(TranslationsContext);

    function translate(key: string) {
        console.log('translationsMap', translationsMap, key);
        
        return translationsMap.get(key) ?? key;
    }

    return { t: translate };
} 