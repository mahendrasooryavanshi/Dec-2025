//    ****
//     ****
//      ****
//       ****



const n = 4;
for (let i = 1; i <= n; i++) {
    let str = ""

    for (let k = 1; k < i; k++) {
        str += " ";
    }
    for (let j = 1; j <= n; j++) {
        str += " *"
    }
    console.log(str)
}