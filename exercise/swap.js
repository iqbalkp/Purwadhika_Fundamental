const word = "Selamat Datang di Kota Bandung"
let result = ""

for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
        result += word.charAt(i).toLocaleLowerCase()
    } else {
        result += word.charAt(i).toUpperCase()
    }
}

console.log(word)
console.log(result)