//            ******
//             ******
//              ******
//               ******
//     Parallelogram Star Pattern

// Difficulty – ★★



const row = 5
const colums = 7

for (let i = 0; i < row; i++) {
    let str = "";

    for (let k = 0; k < i; k++) {
        str += " "

    }
    for (let j = 0; j < colums; j++) {
        str += "* "
    }
    console.log(str)
}