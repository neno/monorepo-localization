import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { TranslatableFormData } from './TranslatableFormComponent.types';
import { useTranslation } from 'localization';

import './TranslatableFormComponent.css';

export function TranslatableFormComponent() {
  const { t } = useTranslation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TranslatableFormData>();

  const onSubmit = (data: TranslatableFormData) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className='translatable-form-component'
      >
        <fieldset>
          <legend>{t('userInfo')}</legend>
          <ol className='nolist'>
            <li>
              <label>
                <span>{t('name')}</span>
                <input
                  {...register('name', { required: true })}
                  data-1p-ignore
                />
                {errors.name?.type === 'required' && (
                  <p role='alert' className='error'>
                    First name is required
                  </p>
                )}
              </label>
            </li>
            <li>
              <label>
                <span>{t('email')}</span>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  data-1p-ignore
                />
              </label>
              {errors.email && (
                <p role='alert' className='error'>
                  {t(`errors.email.${errors.email.type}`)}
                </p>
              )}
            </li>
            <li>
              <label>
                <span>{t('phone')}</span>
                <input
                  {...register('phone', {
                    required: true,
                    pattern: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                  })}
                  placeholder='+49 12 34 56 78 90'
                  data-1p-ignore
                />
              </label>
              {errors.phone && (
                <p role='alert' className='error'>
                  {t(`errors.phone.${errors.phone.type}`)}
                </p>
              )}
            </li>
          </ol>
        </fieldset>
        <p className='info'>
          {isValid &&
            t('fullUserInfo', {
              name: control._formValues.name,
              email: control._formValues.email,
              phone: control._formValues.phone,
            })}
        </p>
        <div className='buttons'>
          <button className='btn primary' type='submit'>
            {t('submit')}
          </button>
          <button className='btn tertiary'>{t('cancel')}</button>
        </div>
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}
