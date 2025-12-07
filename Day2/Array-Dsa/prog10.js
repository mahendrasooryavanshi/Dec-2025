// 🟦 1. Rotate Array RIGHT by K steps
// Definition:

// Last K elements move to the front.

// Example 1
// Input:
// array = [1, 2, 3, 4, 5, 6, 7]
// k = 3

// Output:
// [5, 6, 7, 1, 2, 3, 4];


// const array = [1, 2, 3, 4, 5, 6, 7]
// const k = 3;

function rightRotateByK(array, k) {
    const n = array.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        let last = array[n - 1];
        for (let j = n - 1; j > 0; j--) {
            array[j] = array[j - 1]
        }
        array[0] = last;
    }
    return array
}
const array = [1, 2, 3, 4, 5, 6, 7]
const k = 3;
function leftRotationByK(array, k) {
    let n = array.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        let first = array[0];
        for (let j = 0; j < n - 1; j++) {
            array[j] = array[j + 1]
        }
        array[n - 1] = first;
    }
    return array;
}
console.log(leftRotationByK(array, k))
// console.log(rightRotateByK(array, k))