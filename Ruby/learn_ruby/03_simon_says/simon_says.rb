#write your code here

def echo string
    string
end

def shout string
    string.upcase
end

def repeat string,times=2
    ([string] * times).join(' ')
end

def start_of_word string,size
    string[0,size]
end

def first_word string
    string.split.first
end

#Not my code!
def titleize(string)
    string_arr = string.split(" ")
    index = 0 

    def small_word?(word, index)
        words = ["and", "of", "a", "the", "on", "in", "or", "an", "over"]
        words.each do |el| 
            if (el.downcase == word.downcase && index != 0)
                return true
            end
        end
        return false
    end

    while (index < string_arr.length) do 
        if(!small_word?(string_arr[index], index))
            string_arr[index] = string_arr[index].capitalize
        end
        index += 1
    end
    return string_arr.join(" ")
end