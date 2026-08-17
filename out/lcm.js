import getAllPrimeDivisors from "./utils/get-all-prime-divisors.js";
import isAnyNumberDivisibleBy from "./utils/is-any-number-divisible-by.js";
import isEveryArrayValueOne from "./utils/is-every-array-value-one.js";
import isEveryValueInteger from "./utils/is-every-value-integer.js";
import isEveryValueGreaterThanZero from "./utils/is-every-value-greater-than-zero.js";
import replaceDivisibleBy from "./utils/replace-divisibleBy.js";
export default function lcm(...values) {
    if (!isEveryValueInteger(values)) {
        throw new TypeError("Expect only integer numbers as arguments");
    }
    if (!isEveryValueGreaterThanZero(values)) {
        throw new TypeError("Expect only positive and non-zero values as arguments");
    }
    const primeDivisors = getAllPrimeDivisors(values);
    const result = [];
    let index = 0;
    let divisor = primeDivisors[index];
    while (!isEveryArrayValueOne(values)) {
        if (isAnyNumberDivisibleBy(values, divisor)) {
            result.push(divisor);
            values = replaceDivisibleBy(values, divisor);
        }
        else {
            index += 1;
            divisor = primeDivisors[index];
        }
    }
    return result.reduce((previous, current) => {
        return previous * current;
    });
}
