// ****
// ****
// ****
// ****


function createPatten(n) {
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let coloum = 1; coloum <= n; coloum++) {
            str += "* "
        }
        console.log(str)
    }
    return "Patten created successfully"
}
console.log(createPatten(4))