// 8️⃣ Find most repeated value
const input = ["black", "red", "blue", "red", "green", "blue", "red"]

function mostRepetedValue(input) {
    let map = new Map()
    for (let char of input) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let maxCount = 0;
    let maxValue = null;
    for (let [key, value] of map) {
        if (value > maxCount) {
            maxCount = value
            maxValue = key
        }
    }
    return { maxCount, maxValue }
}
console.log(mostRepetedValue(input))
// Output
// "red"

