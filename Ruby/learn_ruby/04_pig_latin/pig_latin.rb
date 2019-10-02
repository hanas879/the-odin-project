#write your code here
def translate string
    vowel = ["a", "e", "i", "o", "u"]
    consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"]
    word = string.downcase.split("")
    result = ""
    
    vowel.each do |char|
        if word.first == char
            result = word.insert(-1, "ay").join
        end
    end

    consonant.each do |char|
        if word.first == char
            result = word.rotate(1).insert(-1, "ay").join
        end
    end
    result
end

