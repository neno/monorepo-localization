import { useTranslations } from '../translations/useTranslations';

export function MyTestComponent() {
  const { t } = useTranslations();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <fieldset>
          <legend>{t('userInfo')}</legend>
          <ol className='nolist'>
            <li>
              <label>
                <span>{t('name')}</span>
                <input type='text' name='name' id='name' />
              </label>
            </li>
            <li>
              <label>
                <span>{t('email')}</span>
                <input type='email' name='email' id='email' />
              </label>
            </li>
          </ol>
        </fieldset>
        <div className='buttons'>
          <button className='btn primary' type='submit'>
            {t('submit')}
          </button>
          <button className='btn tertiary'>{t('cancel')}</button>
        </div>
      </form>
    </div>
  );
}
