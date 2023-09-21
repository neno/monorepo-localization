import './App.css';
import { TranslatableForm } from './components/TranslatableForm/TranslatableForm';
import {
  CustomTranslationsProps,
  TranslationsType,
} from './components/TranslatableForm/TranslatableForm.types';
import de from './locales/de.json';

function App() {
  const customProps: CustomTranslationsProps<TranslationsType> = {
    enforcedLanguage: 'de',
    customTranslationsPerLanguage: { de },
  };
  return (
    <div className='App'>
      <h1>App Translatable Form</h1>
      <div className='card'>
        <TranslatableForm />
        <TranslatableForm {...customProps} />
      </div>
    </div>
  );
}

export default App;
