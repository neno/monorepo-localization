import { initLocalization, useTranslation } from 'localization';
import { TranslatableFormComponent } from '../TranslatableFormComponent/TranslatableFormComponent';
import { TranslatableFormProps } from './TranslatableForm.types';
import { translatableFormDefaultSettings } from './TranslatableForm.settings';

import styles from './TranslatableForm.module.css';

const getFormTitle = (
  hasEnforcedLang: boolean,
  hasCustomTranslations: boolean
) => {
  if (hasEnforcedLang && !hasCustomTranslations) {
    return 'formWithEnforcedLanguage';
  }

  if (!hasEnforcedLang && hasCustomTranslations) {
    return 'formWithCustomTranslations';
  }

  if (hasEnforcedLang && hasCustomTranslations) {
    return 'formWithEnforcedLanguageAndCustomTranslations';
  }

  return 'formWithDefaultSettings';
};

export function TranslatableForm({
  enforcedLang,
  customTranslations,
}: TranslatableFormProps) {
  const settings = {
    ...translatableFormDefaultSettings,
    enforcedLang,
    customTranslations,
  };
  initLocalization(settings);
  const { t } = useTranslation();
  const hasCustomTranslations =
    Object.keys(customTranslations || {}).length > 0;

  const formTitle = getFormTitle(!!enforcedLang, hasCustomTranslations);

  return (
    <div className='translatable-form'>
      <h2>{t(formTitle)}</h2>
      <dl>
        <dt>{t('enforceLanguage')}</dt>
        <dd>{enforcedLang ? enforcedLang : t('no')}</dd>
        <dt>{t('customTranslations')}</dt>
        <dd>{hasCustomTranslations ? t('yes') : t('no')}</dd>
      </dl>
      <TranslatableFormComponent />
    </div>
  );
}
