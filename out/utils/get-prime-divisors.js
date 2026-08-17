/**
 * Get all the number divisors that are primes
 * @param value A positive integer number
 * @returns An array including all the prime divisors
 */
export default function getPrimeDivisors(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError("Expect an integer number as argument");
    }
    if (value <= 0) {
        throw new TypeError("Only non-zero and positive values are accepted as argument");
    }
    if (isPrime(value)) {
        return [value];
    }
    const primeDivisors = [];
    for (let i = 1; i <= value; i++) {
        if (value % i !== 0) {
            continue;
        }
        if (!isPrime(i)) {
            continue;
        }
        primeDivisors.push(i);
    }
    return primeDivisors;
}
export function getDivisors(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError("Expect an integer number as argument");
    }
    if (value <= 0) {
        throw new TypeError("Only non-zero and positive values are accepted as argument");
    }
    const divisors = [];
    for (let i = 1; i <= value; i++) {
        if (value % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
export function isPrime(value) {
    if (value <= 0) {
        throw new TypeError("Only non-zero and positive values are accepted as argument");
    }
    const divisors = getDivisors(value);
    const hasOnlyTwoDivisors = divisors.length === 2;
    const isDivisibleByOneAndItself = divisors.includes(1) && divisors.includes(value);
    return hasOnlyTwoDivisors && isDivisibleByOneAndItself;
}
