

const repeatString = function(word, times) {
    
    let i = 1
    let wordToAdd = word
    if(times != 0 && times >= 0){
        while(i < times) {
            word = word + wordToAdd
            i++
        }
        return word
    } else if(times < 0) {
        return "ERROR"
    } else {
        return ""
    }
    
}

module.exports = repeatString
