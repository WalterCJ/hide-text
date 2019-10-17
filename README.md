# Hide-text  
Convert a string of characters to asterisks or any other placeholder. It's great for masking information like API keys or any other data you don't want to fully show.

[![Coverage Status](https://coveralls.io/repos/github/WalterCJ/hide-text/badge.svg?branch=master)](https://coveralls.io/github/WalterCJ/hide-text?branch=master)[![Build Status](https://travis-ci.org/WalterCJ/hide-text.svg?branch=master)](https://travis-ci.org/WalterCJ/hide-text)[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Installation
```bash
npm i hide-text
```

## Tests
Describe and show how to run the tests with code examples.

## How to use?
After you require or import:
```js
    let result = hideText('this is your original string', { placeholder: '#', showLeft: 4, showRight: 0, trim: 0 })
    //result -> "this ## #### ######## ######"
```

## Config
Hide-text supports three ways to define config.

* **placeholder**: character that is going to replace the original text. `Default: '*'`
* **showLeft**: show this many characters in the left side of the string. `Default: 0`
* **showRight**: show this many characters in the right side of the string. `Default: 0`
* **trim**: reduce the result string to this many characters. `Default: 0`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](LICENSE).