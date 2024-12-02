const number = 1234567 // 1.234.567
const numString = number.toString() // "1234567" .567
let result = ""

console.log(number)
console.log(numString)

for (let i = numString.length - 1; i>= 0; i--) {
   // result = result + numString.charAt(i)
   //console.log(numString.charAt(i))
   result += numString.charAt(i)
   console.log(result)
}