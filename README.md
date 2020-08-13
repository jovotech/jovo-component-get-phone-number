# Jovo Conversational Component: GetPhoneNumber

## Getting Started

The component provides a prepackaged solution to get your user's phone number.

> [Find out more about Jovo's Conversational Components](https://www.jovo.tech/docs/components)

### Installation

You can install the component using npm:

```sh
$ npm install --save jovo-component-get-phone-number
```

After that, you use the Jovo CLI to transfer the component's files to your project using te `load` command:

```sh
$ jovo load jovo-component-get-phone-number
```

Last but not least you have to include the component in your `app.js`:

```js
// @language=typescript
// src/app.ts

import { GetPhoneNumber } from './components/jovo-component-get-phone-number';

app.useComponents(new GetPhoneNumber());

// @language=javascript
// src/app.js

const { GetPhoneNumber } = require('../components/jovo-component-get-phone-number/index');

app.useComponents(new GetPhoneNumber());
```

## Sample Dialog

SSML tags are not included in sample dialogs, but might be included in the responses.

<details>
<summary>Sample Dialog #1</summary>

| User            | Alexa Speech                                | Alexa Reprompt                              | Keys                               |
| --------------- | ------------------------------------------- | ------------------------------------------- | ---------------------------------- |
| &nbsp;          | Please tell me your phone number.           | &nbsp;                                      | start-question                     |
| It's 0123456789 | &nbsp;                                      | &nbsp;                                      | &nbsp;                             |
| &nbsp;          | OK, I got {{phoneNumber}}. Is that correct? | Is your phone number really {{phoneNumber}} | confirm-question, confirm-reprompt |
| Yes.            | &nbsp;                                      | &nbsp;                                      | &nbsp;                             |

</details>

<details>
<summary>Sample Dialog #2</summary>

| User            | Alexa Speech                                         | Alexa Reprompt                                   | Keys                               |
| --------------- | ---------------------------------------------------- | ------------------------------------------------ | ---------------------------------- |
| &nbsp;          | Please tell me your phone number.                    | &nbsp;                                           | start-question                     |
| It's 0123456789 | &nbsp;                                               | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | OK, I got {{phoneNumber}}. Is that correct?          | Is your phone number really {{phoneNumber}}      | confirm-question, confirm-reprompt |
| No              | &nbsp;                                               | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | Alright, let's try again. What is your phone number? | Please tell me your phone number digit by digit. | confirm-reject, reprompt           |
| It's 0123456789 | &nbsp;                                               | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | OK, I got {{phoneNumber}}. Is that correct?          | Is your phone number really {{phoneNumber}}      | confirm-question, confirm-reprompt |
| Yes.            | &nbsp;                                               | &nbsp;                                           | &nbsp;                             |

</details>

<details>
<summary>Sample Dialog #3</summary>
System understood phone number wrong X times:

| User            | Alexa Speech                                                                                                                                | Alexa Reprompt                                             | Keys                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| &nbsp;          | Alright, let's try again. What is your phone number?                                                                                        | Please tell me your phone number digit by digit.           | confirm-reject, reprompt                                     |
| It's 0123456789 | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | OK, I got {{phoneNumber}}. Is that correct?                                                                                                 | Is your phone number really {{phoneNumber}}                | confirm-question, confirm-reprompt                           |
| No              | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | Unfortunately, I have some problems understanding your phone number. Let's slow down, please tell me the first three digits of your number. | &nbsp;                                                     | sequence-start                                               |
| 012             | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | I got {{sequence}}. Is that correct?                                                                                                        | &nbsp;                                                     | sequence-confirm-question                                    |
| Yes             | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | Great! Please continue with the next three digits of your phone number.                                                                     | Please tell me the next three digits of your phone number. | sequence-question, sequence-reprompt                         |
| 345             | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | I got {{sequence}}. Is that correct?                                                                                                        | &nbsp;                                                     | sequence-confirm-question                                    |
| Yes             | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | Great! Now tell me the last four digits please.                                                                                             | Tell me the last four digits of your phone number please.  | sequence-last-digits-question, sequence-last-digits-reprompt |
| 6789            | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |
| &nbsp;          | I got {{sequence}}. Is that correct?                                                                                                        | &nbsp;                                                     | sequence-confirm-question                                    |
| Yes             | &nbsp;                                                                                                                                      | &nbsp;                                                     | &nbsp;                                                       |

</details>

<details>
<summary>Sample Dialog #4</summary>
System understood phone number wrong X times:

| User            | Alexa Speech                                                                                                                                | Alexa Reprompt                                   | Keys                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------- |
| &nbsp;          | Alright, let's try again. What is your phone number?                                                                                        | Please tell me your phone number digit by digit. | confirm-reject, reprompt           |
| It's 0123456789 | &nbsp;                                                                                                                                      | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | OK, I got {{phoneNumber}}. Is that correct?                                                                                                 | Is your phone number really {{phoneNumber}}      | confirm-question, confirm-reprompt |
| No              | &nbsp;                                                                                                                                      | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | Unfortunately, I have some problems understanding your phone number. Let's slow down, please tell me the first three digits of your number. | &nbsp;                                           | sequence-start                     |
| 012             | &nbsp;                                                                                                                                      | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | I got {{sequence}}. Is that correct?                                                                                                        | &nbsp;                                           | sequence-confirm-question          |
| No              | &nbsp;                                                                                                                                      | &nbsp;                                           | &nbsp;                             |
| &nbsp;          | Oh, sorry! Could you say these digits again?                                                                                                | &nbsp;                                           | sequence-confirm-reject            |

<---> continue just like in dialog #3 <--->

</details>

## Response

The component's `$response` has the following interface:

```javascript
{
    status: "SUCCESSFUL" | "REJECTED" | "ERROR",
    data: {
        phoneNumber: "string" // E164 format
    }
}
```

The `data` property will only be defined, if the component was successful!

> [Find out more about Conversational Component's responses](https://www.jovo.tech/docs/components#response)

## Configuration

The component only provides one option you can configure. It's the `numberOfFails` property, determining when the component should switch to the sequence mode, where it asks the user to input their phone number in a sequence of 3 digits, instead of the whole number at once.

Inside your project's `config.js` override the default value, which is `3`:

```js
// config.js

module.exports = {
  // ...
  components: {
    'jovo-component-get-phone-number': {
      numberOfFails: 5,
    },
  },
};
```

> [Find out more about Conversational Component's configuration](https://www.jovo.tech/docs/components#configuration)
