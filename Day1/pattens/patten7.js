//            ****
//           ****
//          ****
//         ****

const n = 4;
for (let i = n; i >= 1; i--) {
    let str = "";
    for (let k = 0; k < i; k++) {
        str += " "
    }
    for (let j = n; j >= 1; j--) {
        str += "*"
    }

    console.log(str)
}