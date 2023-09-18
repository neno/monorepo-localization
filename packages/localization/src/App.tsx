import { LocalizableText } from './components/LocalizableText';
import { Stack } from './components/Stack';
import { useAtom } from 'jotai';

interface AppProps {
  fallbackLang: string;
}

function App() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
      <h1>
        <LocalizableText text='appTitle' />
      </h1>
      <main>
        <Stack>
          <section>
            <h2>
              <LocalizableText text='localization.simple' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greeting' />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText text='greeting' />
            </p>
          </section>
          <section>
            <h2>
              <LocalizableText text='localization.withParams' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greetingWithNameAge' params={{ name: 'Andreas', age: 25 }} />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText
                text='greetingWithNameAge'
                params={{ name: 'Andreas', age: 25 }}
              />
            </p>
          </section>
          <section>
            <h2>
              <LocalizableText text='localization.withProvidedLang' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greeting' lang='de' />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText text='greeting' lang='de' />
            </p>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greeting' lang='en' />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText text='greeting' lang='en' />
            </p>
          </section>
          <section>
            <h2>
              <LocalizableText text='localization.withProvidedTranslations' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greeting' translations={{ greeting: 'Guten Morgen' }} />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText
                text='greeting'
                translations={{ greeting: 'Guten Morgen' }}
              />
            </p>
          </section>
          <section>
            <h2>
              <LocalizableText text='localization.withNestedKey' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='contact.address.street' />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText text='contact.address.street' />
            </p>
          </section>
        </Stack>
      </main>
    </div>
  );
}

export default App;
