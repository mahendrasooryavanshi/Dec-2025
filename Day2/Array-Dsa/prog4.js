// Check if array is sorted
const array = [8, 36, 50, 80, 90]

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true;
}
console.log(isSorted(array))