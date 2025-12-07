// Count frequency of numbers

const array = [1, 5, 3, 6, 0];

function frequency(array) {
    const map = new Map();

    for (let char of array) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    return Object.fromEntries(map)
}


console.log(frequency(array))