// Remove duplicates
const array = [8, 0, 8, 50, 36, 90, 80, 50, 0]

function removeDuplicate(array) {
    let map = new Map();
    let nonDeuplicate = []
    for (let e of array) {
        if (!map.has(e)) {
            map.set(e, e)
            nonDeuplicate.push(e)
        }
    }
    return nonDeuplicate;
}
console.log(removeDuplicate(array))