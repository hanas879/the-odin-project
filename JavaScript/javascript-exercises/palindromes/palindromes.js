const palindromes = function(word) {
    word = word.toLowerCase().replace(/[^A-Za-z]/g, "")
    let reverseWord = word.toLowerCase().replace(/[^A-Za-z]/g, "").replace(" ", "").split("").reverse().join("")

    return word == reverseWord
}

module.exports = palindromes
