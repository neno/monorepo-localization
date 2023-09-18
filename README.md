# Localizing a Monorepo

## Requirements

- Every label must be customisable and comes with default settings
- Every label can offer internationalisation (app developer can supply texts for each language)

## Ideas

- Pass a function with texts?: Like (locale:Locale)=>{return custom text or default text per locale}
- Check if we can add it to Jotai store
- Values are saved as an nested object and can be queried via a string
- Offer convenience functions to easily get the current value
- We are adding default values
- One person is implementing a POC version and based on that discussions can be held
- Default values for each language?
- Should the key be displayed if there is no default value?

## Evaluation

- Is a custom solution really a good idea
- Alternatives / existing solutions: I18next, etc.
