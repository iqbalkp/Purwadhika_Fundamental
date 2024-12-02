const word = "hello purwadhika bandung" // Hello Purwadhika Bandung
let isCapital = true
let result = ""

for(let i = 0; i <  word.length; i++) {
    if (isCapital == true) {
        result += word.charAt(i).toUpperCase() // HELLO
        isCapital = false
    } else {
        result += word.charAt(i).toLowerCase()
    }
    
    if (word.charAt(i) == " ") {
        isCapital = true
    }
}

console.log(result)