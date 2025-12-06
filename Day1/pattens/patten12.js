//    *******
//     *   *
//      * *
//       *

let n = 4;

for (let i = 1; i <= n; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += " "
    }
    let start = (n * 2) - 1;
    for (let k = start; k >= (2 * i) - 1; k--) {
        if (k == 1 || k == i * 2 - 1 || i == 1 || i == n) {
            str += "*"
        }
    }
    console.log(str)
}