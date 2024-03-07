# Ethereal Wisdom Screen

An ethereal wisdom screen for mystical words of wisdom.

## How to Use?

To install this package, run the following command below

```bash
npm i ethereal-wisdom-screen
```

## Usage

```javascript
import displayCelestialWisdom from 'ethereal-wisdom-screen';
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Select your wisdom type [Movies, Tv, Speeches, Books, Anime, Lyrics, Sports]: ', (input) => {
  const celestialWisdom = displayCelestialWisdom(input);
  console.log(celestialWisdom);
  rl.close();
});
```

## Contributing Guidelines

We encourage the submission of pull requests to enhance this project. If you plan significant changes, kindly initiate a discussion by opening an issue beforehand.

Ensure that relevant tests are modified or added as necessary.

Feel free to propose alterations and improvements.

## License

[MIT](https://choosealicense.com/licenses/mit/)