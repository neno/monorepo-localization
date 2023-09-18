# Localizing a Monorepo

## Requirements

- Every label must be customisable and comes with default settings
- Every label can offer internationalisation (app developer can supply texts for each language)

## Ideas

- Pass a function with texts?: Like (locale:Locale)=>{return custom text or default text per locale}

  - we store the locale in the jotai-store for that we don't need to pass the language with every call to _translate_

- Check if we can add it to Jotai store

  - Yes, we store the language and the translationMap in the jotai-store

- Values are saved as an nested object and can be queried via a string

  - Example: `{en: {errors: {name: {email: {required: 'Email is required'}}}}`

- Offer convenience functions to easily get the current value

  - Example: `t('errors.name.email.required')`

- We are adding default values

  - Every package provides the translations (default values) as a json file (e.g. _en.json_) in the locales directory

- Overriding default values

  - the app developer can provide props to the component: `{enforcedLang: 'de', customTranslations: {...}`
  - _enforcedLang_: the app developer can enforce a language (e.g. for testing or if he does not want to provide translations for all languages)
  - _customTranslations_: the app developer can provide custom translations and provide only the values he wants to override. They must match the structure of the default translations, though, eg: `customTranslations={{ en: {errors: {name: {email: {required: 'Email must not be empty required'}}}}}}`

  - default translations and custom translations are merged for that the user doesn't need to provide all translations

- One person is implementing a POC version and based on that discussions can be held

  - done

- Default values for each language?

  - No: we don't know which languages will be supported by the clients. But we should at least provide default locales for the fallback language (en, specified by each package)

- Should the key be displayed if there is no default value?
  - Yes, key should be self-explanatory and is better than breaking the app
  - We could log an warning in the console if the translation is missing

## Evaluation

- Is a custom solution really a good idea

  - Only if we keep a very slim and easy to use API without lots of extras

- Alternatives / existing solutions: I18next, etc.
  - i18next is a very powerful solution but it is also very complex and has a lot of features we don't need
  - React-intl is also very powerful but also very complex
  - New kid on the block: https://lingui.dev/tutorials/react
