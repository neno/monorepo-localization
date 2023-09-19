import './App.css';
import { TranslatableForm2 } from './components/TranslatableForm2/TranslatableForm2';

function App() {
  return (
    <div className='App'>
      <h1>App Translatable Form</h1>
      <div className='card'>
        <TranslatableForm2 />
        <TranslatableForm2 enforcedLang='de' />
        <TranslatableForm2
          customTranslations={{
            en: { name: 'Full name' },
            de: { name: 'Vor- und Nachname' },
          }}
        />
        <TranslatableForm2
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
