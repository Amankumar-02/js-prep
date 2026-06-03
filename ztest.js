function groupBy(arr, key) {
    const result = {};

    for (const item of arr) {
        const groupKey = item[key];
        console.log(!result[groupKey]);

        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        console.log(result)
        result[groupKey].push(item);
    }

    return result;
}

let x = groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');

console.log(x)