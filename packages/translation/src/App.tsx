import { useState } from 'react';
import './App.css';
import {
  TranslationsContext,
  TranslationsContextProvider,
} from './context/translation/translationsContext';
import { MyTestComponent } from './components/MyTestComponent';

function App() {
  const lang = 'en';
  const map = new Map();
  map.set('greeting', 'Hello World!');
  const lang2 = 'de';
  const map2 = new Map();
  map2.set('greeting', 'Guten Tag!');

  return (
    <>
      <TranslationsContextProvider currentLanguage={lang} translationsMap={map}>
        <MyTestComponent />
      </TranslationsContextProvider>
      <TranslationsContext.Provider
        value={{ currentLanguage: lang2, translationsMap: map2 }}
      >
        <MyTestComponent />
      </TranslationsContext.Provider>
    </>
  );
}

export default App;
