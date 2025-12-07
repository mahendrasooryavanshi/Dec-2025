// Find second largest element


const array = [200, 100, 1199, 45, 69];

function secondHighest(array) {
    let max = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < array.length; i++) {

        if (max < array[i]) {
            third = second;
            second = max;
            max = array[i];
        } else if (second < array[i] && max !== array[i]) {
            third = second;
            second = array[i];
        } else if (third < array[i] && array[i] !== max && array[i] !== second) {
            third = array[i];
        }
    }
    return { max: max, second: second, third: third }
}

console.log(secondHighest(array))