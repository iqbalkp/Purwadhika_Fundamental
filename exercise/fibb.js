// Write a code to print the frist N fibonacci numbers
// 0 1 1 2 3 5 8 13 21 34

let n = 10
let a = 0
let b = 1
let Temp = 0

for(let i = 1; i < n; i++) {
    Temp = a + b
    b = a
    a = Temp
}

console.log(a)