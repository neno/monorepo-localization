import { useState } from 'react';
import './App.css';

import { MyTestComponent } from './components/MyTestComponent';
import en from './locales/en.json';
import de from './locales/de.json';
import { createTranslationsMap } from './translations/helpers';
import { TranslationsContextProvider } from './translations/TranslationsContext';
import { CreateTranslationsProps } from './translations/translations.types';

function App() {
  const props1: CreateTranslationsProps = { translations: en };
  const map1 = createTranslationsMap(props1);

  const props2: CreateTranslationsProps = {
    translations: de,
    enforcedLanguage: 'de',
  };

  console.log('map1', map1);

  const map2 = createTranslationsMap(props2);

  return (
    <>
      <TranslationsContextProvider translationsMap={map1}>
        <MyTestComponent />
      </TranslationsContextProvider>
      <TranslationsContextProvider translationsMap={map2}>
        <MyTestComponent />
      </TranslationsContextProvider>
    </>
  );
}

export default App;
