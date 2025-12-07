// // Input
// nums = [2, 7, 11, 15]
// target = 9

// Output
// [0, 1]


const array = [2, 7, 11, 15]
const target = 9;

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const remain = target - element;
        const index = array.indexOf(remain)
        if (index !== i && index !== -1) {
            return [i, index]
        }
    }
    return []
}

console.log(twoSum(array, target))