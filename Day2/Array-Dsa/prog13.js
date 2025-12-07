// Input
// nums = [-1, 0, 1, 2, -1, -4]

// Output
// [
//     [-1, -1, 2],
//     [-1, 0, 1]
// ]

const array = [-1, 0, 1, 2, -1, -4];
function threeSum(array, target) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] + array[j + 1] === target) {
                result.push([array[i], array[j], array[j + 1]])
            }
        }
    }
    return result;

}

console.log(threeSum(array, 0))