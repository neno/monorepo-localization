import './App.css';
import { TranslatableForm } from './components/TranslatableForm/TranslatableForm';
import de from './locales/de.json';

function App() {
  return (
    <div className='App'>
      <h1>App Translatable Form</h1>
      <div className='card'>
        <TranslatableForm />
        <TranslatableForm
          enforcedLanguage='de'
          customTranslationsPerLanguage={{ de }}
        />
        {/* <TranslatableForm enforcedLang='de' />
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
        /> */}
      </div>
    </div>
  );
}

export default App;
