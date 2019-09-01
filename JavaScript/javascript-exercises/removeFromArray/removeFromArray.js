const removeFromArray = function(array, remove1) {
    i = 0
    while(i < array.length) {
        if(array[i] === remove1) {
            array.splice(i,1)
        }

        i++
    }
    return array
}

module.exports = removeFromArray
