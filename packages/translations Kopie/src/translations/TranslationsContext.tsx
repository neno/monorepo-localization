import { createContext, useState } from 'react';
import {
  TranslationsContextProps,
  TranslationsContextProviderProps,
} from './translations.types';

const defaultContextProps: TranslationsContextProps = {
  currentLanguage: 'en',
  translationsMap: new Map(),
};

export const TranslationsContext =
  createContext<TranslationsContextProps>(defaultContextProps);

export const TranslationsContextProvider: React.FC<
  TranslationsContextProviderProps
> = ({ children, currentLanguage, translationsMap }) => {
  return (
    <TranslationsContext.Provider value={{ currentLanguage, translationsMap }}>
      {children}
    </TranslationsContext.Provider>
  );
};
