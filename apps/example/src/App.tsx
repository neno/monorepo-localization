import { TranslatableForm } from 'translatable-form';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>App Translatable Form</h1>
      <div className='grid'>
        <TranslatableForm />
        <TranslatableForm enforcedLang='de' />
        <TranslatableForm
          customTranslations={{
            en: { name: 'Full name' },
            de: { name: 'Vor- und Nachname' },
          }}
        />
        <TranslatableForm
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
