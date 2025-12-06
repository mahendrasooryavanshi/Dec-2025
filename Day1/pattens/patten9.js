//               *
//              ***
//             *****
//            *******



let row = 4;
for (let i = 1; i <= row; i++) {
    let str = ""
    for (let k = 1; k <= row - i; k++) {
        str += " "
    }
    for (let j = 1; j <= (2 * i) - 1; j++) {
        str += "*"
    }
    console.log(str)
}