//    *******
//     *****
//      ***
//       *


let n = 4;

for (let i = 1; i <= n; i++) {
    let str = ""
    for (let k = 0; k < i; k++) {
        str += " "
    }
    for (let j = n * 2 - 1; j >= (2 * i) - 1; j--) {
        str += "*"
    }
    console.log(str)
}