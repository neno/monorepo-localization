import { initLocalization } from 'localization';
import en from '../../locales/en.json';
import de from '../../locales/de.json';
import { TranslatableFormComponent } from '../TranslatableFormComponent/TranslatableFormComponent';

export function TranslatableForm() {
  initLocalization({ translations: { en, de } });

  return (
    <div>
      <TranslatableFormComponent />
    </div>
  );
}
