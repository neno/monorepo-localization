import { useTranslation } from '../localization/useTranslation';

interface LocalizableTextProps {
  text: string;
  params?: Record<string, any>;
  lang?: string;
  translations?: Record<string, any>;
}

export function LocalizableText({ text, params }: LocalizableTextProps) {
  const { t } = useTranslation();
  console.log('browser lang', navigator.language);

  return <>{t(text, params)}</>;
}
