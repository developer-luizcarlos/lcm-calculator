export default function removeDuplicatesFromArray(arr) {
    const newArr = [];
    for (const item of arr) {
        if (newArr.includes(item)) {
            continue;
        }
        newArr.push(item);
    }
    return newArr;
}
