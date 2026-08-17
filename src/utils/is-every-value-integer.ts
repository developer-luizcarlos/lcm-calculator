/**
 * Check if every value in an array of numbers
 * is an integer number
 * @param values An array of numbers
 */
export default function isEveryValueInteger(values: number[]): boolean {
    return values.every((val) => Number.isInteger(val));
}
