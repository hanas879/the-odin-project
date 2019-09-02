const sumAll = function(num, endNum) {
    if(num < 0 || endNum < 0) {
        return "ERROR"
    }
    
    let sum = 0
    for(let i = num; i < endNum + 1; i++) {
        sum += i
    }
    return sum
}

module.exports = sumAll
