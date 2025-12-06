//       *
//      * *
//     *   *
//    *******



let row = 4;

for (let i = 1; i <= row; i++) {
    let str = ""
    for (let j = 1; j <= row - i; j++) {
        str += " "
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
        if (k == 1 || k == ((2 * i) - 1) || i == 1 | i == row) {
            str += "*"
        } else {
            str += ' '
        }
    }
    console.log(str)
}