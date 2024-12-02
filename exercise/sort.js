let a = 42
let b = 27
let c = 18

if (a > b) {
    let d = a
    a = b
    b = d
}

if (b > c) {
    let d = b
    b = c
    c = d
}

if (a > b) {
    let d = a
    a = b
    b = d
}

console.log(a, b, c)