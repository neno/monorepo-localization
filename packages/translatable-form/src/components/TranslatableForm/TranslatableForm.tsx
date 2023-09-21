import { setupTranslations, TranslationsContextProvider } from 'translations';
import { TranslatableFormComponent } from '../TranslatableFormComponent/TranslatableFormComponent';

import en from '../../locales/en.json';
import {
  CustomTranslationsProps,
  translationsSchema,
  TranslationsType,
} from './TranslatableForm.types';

export function TranslatableForm({
  enforcedLanguage,
  customTranslationsPerLanguage,
}: CustomTranslationsProps<TranslationsType>) {
  const translationsMap = setupTranslations<TranslationsType>({
    translations: en,
    enforcedLanguage,
    customTranslationsPerLanguage,
    translationsSchema,
  });

  return (
    <div className='translatable-form'>
      <TranslationsContextProvider translationsMap={translationsMap}>
        <TranslatableFormComponent />
      </TranslationsContextProvider>
    </div>
  );
}
