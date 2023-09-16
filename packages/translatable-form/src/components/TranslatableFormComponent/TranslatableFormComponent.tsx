import { useForm } from 'react-hook-form';
import { TranslatableFormData } from './TranslatableFormComponent.types';
import { useTranslation } from 'localization';

export function TranslatableFormComponent() {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TranslatableFormData>();
  return (
    <form>
      <fieldset>
        <legend>{t('personalInfo.legend')}</legend>
        <ol>
          <li>
            <label>
              <span>{t('personalInfo.firstName')}</span>
              <input {...register('firstName')} />
            </label>
          </li>
          <li>
            <label>
              <span>{t('personalInfo.lastName')}</span>
              <input {...register('lastName')} />
            </label>
          </li>
        </ol>
      </fieldset>
      <fieldset>
        <legend>{t('contact.legend')}</legend>
        <ol>
          <li>
            <label>
              <span>{t('contact.email')}</span>
              <input {...register('contact.email')} />
            </label>
          </li>
          <li>
            <label>
              <span>{t('contact.phone')}</span>
              <input {...register('contact.phone')} />
            </label>
          </li>
        </ol>
      </fieldset>
      <fieldset>
        <legend>{t('address.legend')}</legend>
        <ol>
          <li>
            <label>
              <span>{t('address.street')}</span>
              <input {...register('address.street')} />
            </label>
          </li>
          <li>
            <label>
              <span>{t('address.zip')}</span>
              <input {...register('address.zip')} />
            </label>
          </li>
          <li>
            <label>
              <span>{t('address.city')}</span>
              <input {...register('address.city')} />
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
  );
}
