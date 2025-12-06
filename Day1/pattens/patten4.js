//        ******
//        ******
//        ******
//        ******
// Rectangle Star Pattern



const rows = 4;
const colums = 6;

for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= colums; j++) {
        str += "*"
    }
    console.log(str)
}