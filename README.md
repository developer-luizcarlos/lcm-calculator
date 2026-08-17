# LCM Calculator

Calculates the lcm for multiple provided integer numbers.

## Installation`

```bash
npm install lcm-calculator
```

## Usage

```js
import { lcm } from "lcm-calculator";

const lcm_result = lcm(11, 22, 33, 44);
console.log(lcm_result); // 132
```

Only non-zero and positive integers are accepted as valid arguments. Trying to pass invalid arguments will eventually lead to errors on your program, as in the example:

```js
import { lcm } from "lcm-calculator";

// TypeError: Expect only positive and non-zero values as arguments
const lcm_result = lcm(49, 57, 131, -12);

// TypeError: Expect only integer numbers as arguments
const lcm_result = lcm(23, 90, 1.5);
```

## Development

After cloning the repository, run `npm install` to install the necessary packages to the development.
