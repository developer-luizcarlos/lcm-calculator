type Arg = number | string | boolean;

export default function removeDuplicatesFromArray<T extends Arg>(arr: T[]) {
    const newArr: T[] = [];

    for (const item of arr) {
        if (newArr.includes(item)) {
            continue;
        }

        newArr.push(item);
    }

    return newArr;
}
