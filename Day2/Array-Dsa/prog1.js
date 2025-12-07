// Find max and min in array

let array = [50, 80, 90, 36, 8]

// const max = Math.max(...array)
// console.log(max)

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array[n - 1];
}


function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid))
    return merge(left, right)
}
function merge(left, right) {
    let result = [];
    let j = 0;
    let i = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(array))
console.log("Max =", mergeSort(array).pop());
console.log("Min =", mergeSort(array)[0]);

// console.log(bubbleSort(array))

