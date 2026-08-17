export default function isAnyNumberDivisibleBy(values, divisor) {
    return values.some((val) => val % divisor === 0);
}
