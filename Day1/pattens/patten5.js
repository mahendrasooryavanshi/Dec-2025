//            ******
//            *    *
//            *    *
//            ******
//     Hollow Rectangle Star Pattern

// Difficulty – ★ and 1 / 2



const row = 4;
const colums = 6;

for (let i = 1; i <= row; i++) {
    let str = "";
    for (let k = 1; k <= colums; k++) {
        if (i === 1 || i === row || k === 1 || k === colums) {
            str += "* "
        } else {
            str += "  "
        }
    }
    console.log(str)
}