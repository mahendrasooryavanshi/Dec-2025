// Find most frequent element


const array = [1, 2, 4, 5, 2, 3, 1, 2];
function mostFreqe(array) {
    let longest = [];
    let set = new Set(array)
    for (let num of array) {
        if (!set.has(num - 1)) {
            let temp = [];
            let current = num
            while (set.has(current)) {
                temp.push(current);
                current++;
            }

            if (temp.length > longest.length) {
                longest = temp;
            }
        }
    }
    return longest
}
console.log(mostFreqe(array))