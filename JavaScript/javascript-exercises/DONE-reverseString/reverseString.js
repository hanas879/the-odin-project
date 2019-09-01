const reverseString = function(word) {
    let splitWord = word.split("")
    let reversedArray = splitWord.reverse()
    let reversedWord = reversedArray.join("")
    return reversedWord
}

module.exports = reverseString
