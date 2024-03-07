# Ethereal Wisdom Screen

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

An ethereal wisdom screen for mystical words of wisdom.

## How to Use?

To install this package, run the following command below

```bash
npm i ethereal-wisdom-screen
```

## Usage

```javascript
import displayCelestialWisdom from "ethereal-wisdom-screen";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Select your wisdom type [Movies, Tv, Speeches, Books, Anime, Lyrics, Sports]: ",
  (input) => {
    const celestialWisdom = displayCelestialWisdom(input);
    console.log(celestialWisdom);
    rl.close();
  }
);
```

## Contributing Guidelines

We encourage the submission of pull requests to enhance this project. If you plan significant changes, kindly initiate a discussion by opening an issue beforehand.

Ensure that relevant tests are modified or added as necessary.

Feel free to propose alterations and improvements.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[npm-version-image]: https://badgen.net/npm/v/ethereal-wisdom-screen
[npm-url]: https://www.npmjs.com/package/ethereal-wisdom-screen
[npm-install-size-image]: https://badgen.net/packagephobia/install/ethereal-wisdom-screen
[npm-install-size-url]: https://packagephobia.com/result?p=ethereal-wisdom-screen
[npm-downloads-image]: https://badgen.net/npm/dt/ethereal-wisdom-screen
[npm-downloads-url]: https://npmcharts.com/compare/ethereal-wisdom-screen?minimal=true
