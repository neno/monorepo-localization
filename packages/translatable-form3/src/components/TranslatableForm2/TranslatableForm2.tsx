import { initLocalization, useTranslation } from 'localization';
import { TranslatableFormComponent2 } from '../TranslatableFormComponent2/TranslatableFormComponent2';
import { TranslatableFormProps2 } from './TranslatableForm2.types';
import { translatableForm2DefaultSettings } from './TranslatableForm2.settings';

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

export function TranslatableForm2({
  enforcedLang,
  customTranslations,
}: TranslatableFormProps2) {
  const settings = {
    ...translatableForm2DefaultSettings,
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
      <TranslatableFormComponent2 />
    </div>
  );
}
