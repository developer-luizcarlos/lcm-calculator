import getAllPrimeDivisors from "./utils/getAllPrimeDivisors.ts";
import isAnyNumberDivisibleBy from "./utils/isAnyNumberDivisibleBy.ts";
import isEveryArrayValueOne from "./utils/isEveryArrayValueOne.ts";
import isEveryValueInteger from "./utils/isEveryValueInteger.ts";
import isEveryValueGreaterThanZero from "./utils/isEveryValueGreaterThanZero.ts";
import replaceDivisibleBy from "./utils/replaceDivisibleBy.ts";

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
