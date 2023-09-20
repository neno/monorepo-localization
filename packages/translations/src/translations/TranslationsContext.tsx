import { createContext } from 'react';
import {
  TranslationsContextProps,
  TranslationsContextProviderProps,
} from './translations.types';

const defaultContextProps: TranslationsContextProps = {
  translationsMap: new Map(),
};

export const TranslationsContext =
  createContext<TranslationsContextProps>(defaultContextProps);

export const TranslationsContextProvider: React.FC<
  TranslationsContextProviderProps
> = ({ children, translationsMap }) => {
  console.log('TranslationsContextProvider', translationsMap);

  return (
    <TranslationsContext.Provider value={{ translationsMap }}>
      {children}
    </TranslationsContext.Provider>
  );
};
