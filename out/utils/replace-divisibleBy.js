export default function replaceDivisibleBy(values, divisor) {
    return values.map((val) => {
        return val % divisor === 0 ? val / divisor : val;
    });
}
