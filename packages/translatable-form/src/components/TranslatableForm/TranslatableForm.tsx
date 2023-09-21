import {
  setupTranslations,
  TranslationsContextProvider,
  useTranslations,
} from 'translations';
import { TranslatableFormComponent } from '../TranslatableFormComponent/TranslatableFormComponent';

import en from '../../locales/en.json';
import {
  TranslatableFormProps,
  translationsSchema,
  TranslationsType,
} from './TranslatableForm.types';

export function TranslatableForm({
  enforcedLanguage,
  customTranslationsPerLanguage,
}: TranslatableFormProps<TranslationsType>) {
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
      {/* <h2>{t(formTitle)}</h2>
      <dl>
        <dt>{t('enforceLanguage')}</dt>
        <dd>{enforcedLang ? enforcedLang : t('no')}</dd>
        <dt>{t('customTranslations')}</dt>
        <dd>{hasCustomTranslations ? t('yes') : t('no')}</dd>
      </dl>
      <TranslatableFormComponent /> */}
    </div>
  );
}
