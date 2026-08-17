/**
 * Check if every value in an array of numbers
 * is greater than zero
 * @param values An array of numbers
 */
export default function isEveryValueGreaterThanZero(values) {
    return values.every((val) => val > 0);
}
