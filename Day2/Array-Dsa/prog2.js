// Reverse an array(in -place)
let array = [50, 80, 90, 36, 8]
function ReverseInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    while (end >= start) {
        [array[start], array[end]] = [array[end], array[start]]
        start++;
        end--;
    }
    return array;
}
console.log(ReverseInPlace(array))