export default function replaceDivisibleBy(
    values: number[],
    divisor: number,
): number[] {
    return values.map((val) => {
        return val % divisor === 0 ? val / divisor : val;
    });
}
