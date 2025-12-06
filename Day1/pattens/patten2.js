//    ****
//    *  *
//    *  *
//    ****

const n = 4;
for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            string += "* ";
        } else {
            string += "  "
        }
    }
    console.log(string)
}
