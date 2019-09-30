alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"]

puts "What key to use?"
key = gets.chomp.to_i
shifted = alphabet.rotate(key)

puts "What mode?"
puts "1: Cipher" + "2: Decipher".rjust(25)
mode = gets.chomp.to_i

if mode == 1
    puts "Enter word to cipher:"
    word = gets.chomp.downcase.split("")
    new_word = []
    
    word.each do |letter|
        if alphabet.include?(letter)
            pos_in_alp = alphabet.index(letter)
            letter = shifted[pos_in_alp]
            new_word.push(letter)
            puts new_word
        else
            new_word.push(letter)
        end
    end  
elsif mode == 2
    #decode
end
