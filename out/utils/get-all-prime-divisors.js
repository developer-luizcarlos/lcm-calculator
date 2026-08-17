import getPrimeDivisors from "./get-prime-divisors.js";
import isEveryValueInteger from "./is-every-value-integer.js";
import isEveryValueGreaterThanZero from "./is-every-value-greater-than-zero.js";
import removeDuplicatesFromArray from "./remove-duplicates-from-array.js";
/**
 * Get the prime divisors of each given argument
 * and merge them into a single array without duplicates
 *
 * @param values Non-zero integer numbers to get its prime divisors
 * @returns An array including all the prime divisors of the
 * given arguments
 */
export default function getAllPrimeDivisors(values) {
    if (!isEveryValueInteger(values)) {
        throw new Error("Expect only integer numbers as arguments");
    }
    if (!isEveryValueGreaterThanZero(values)) {
        throw new Error("Expect non-zero integers as arguments");
    }
    const primeDivisors = [];
    for (const val of values) {
        primeDivisors.push(...getPrimeDivisors(val));
    }
    return removeDuplicatesFromArray(primeDivisors).sort((a, b) => a - b);
}
