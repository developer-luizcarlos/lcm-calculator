export default function isAnyNumberDivisibleBy(
    values: number[],
    divisor: number,
): boolean {
    return values.some((val) => val % divisor === 0);
}
