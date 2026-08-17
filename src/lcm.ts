import getAllPrimeDivisors from "./utils/get-all-prime-divisors.ts";
import isAnyNumberDivisibleBy from "./utils/is-any-number-divisible-by.ts";
import isEveryArrayValueOne from "./utils/is-every-array-value-one.ts";
import isEveryValueInteger from "./utils/is-every-value-integer.ts";
import isEveryValueGreaterThanZero from "./utils/is-every-value-greater-than-zero.ts";
import replaceDivisibleBy from "./utils/replace-divisibleBy.ts";

export default function lcm(...values: number[]): number {
    if (!isEveryValueInteger(values)) {
        throw new TypeError("Expect only integer numbers as arguments");
    }

    if (!isEveryValueGreaterThanZero(values)) {
        throw new TypeError(
            "Expect only positive and non-zero values as arguments",
        );
    }

    const primeDivisors = getAllPrimeDivisors(values);
    const result: number[] = [];

    let index = 0;
    let divisor = primeDivisors[index];

    while (!isEveryArrayValueOne(values)) {
        if (isAnyNumberDivisibleBy(values, divisor)) {
            result.push(divisor);

            values = replaceDivisibleBy(values, divisor);
        } else {
            index += 1;

            divisor = primeDivisors[index];
        }
    }

    return result.reduce((previous, current) => {
        return previous * current;
    });
}
