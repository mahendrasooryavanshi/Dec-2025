//            *
//            **
//            ***
//            ****
//            ***
//            **
//            *

const n = 4;
for (let i = 1; i <= n; i++) {
    let stars = ""
    for (let j = 0; j < i; j++) {
        stars += "*"
    }
    let tem = n;
    for (let k = tem - 1; k > tem; k--) {
        stars += "*"

    }
    console.log(stars)
}