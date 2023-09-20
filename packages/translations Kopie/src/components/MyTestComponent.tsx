import { useTranslations } from '../hooks/useTranslations';

export function MyTestComponent() {
  const { t } = useTranslations();
  return (
    <div>
      <h1>{t('greeting')}</h1>
    </div>
  );
}
