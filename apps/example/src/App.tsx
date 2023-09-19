import { TranslatableForm } from 'translatable-form';
import { TranslatableForm2 } from 'translatable-form2';
import { TranslatableForm3 } from 'translatable-form3';
import { TranslatableForm4 } from 'translatable-form4';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>App Translatable Form</h1>
      <div className='grid'>
        <TranslatableForm />
        <TranslatableForm2 enforcedLang='de' />
        <TranslatableForm3
          customTranslations={{
            en: { name: 'Full name' },
            de: { name: 'Vor- und Nachname' },
          }}
        />
        <TranslatableForm4
          enforcedLang='de'
          customTranslations={{
            en: { name: 'Full name' },
            de: { name: 'Vor- und Nachname' },
          }}
        />
      </div>
    </div>
  );
}

export default App;
