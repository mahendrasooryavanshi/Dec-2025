// Move zeros to end
const array = [1, 2, 0, 4, 5, 0, 0, 0, 0, 2, 3, 1, 2];

function moveZeroEnd(array) {
    let start = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[start] = array[i]
            start++
        }
    }
    while (start < array.length) {
        array[start] = 0
        start++;
    }
    return array;
}
console.log(moveZeroEnd(array))