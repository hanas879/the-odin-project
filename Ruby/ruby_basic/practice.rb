# puts "What is your first name?"
# firstName = gets.chomp
# puts "What's you last name?"
# lastName = gets.chomp

# puts "Hello " + firstName + " " + lastName + ". Nice to meet you!"
# -----------------------------------------------------------------------------
# puts "What's you favorite number?"
# number = gets.chomp.to_i
# number += 1
# number = number.to_s
# puts "I think that " + number + " is a better number tho.."
# -----------------------------------------------------------------------------
# puts "What's your first name?"
# firstName = gets.chomp
# puts "And what's your last name?"
# lastName = gets.chomp

# combined_name_lenght = firstName.length + lastName.length

# puts "Did you know that you got " + combined_name_lenght.to_s + " letters in your name " + firstName + " " + lastName + "?"
# -----------------------------------------------------------------------------
# puts "What do you want?!"
# what_I_want = gets.chomp

# reply1 = "what do you mean with "
# reply2 = "you're fired!!"

# puts reply1.upcase + '"' + what_I_want + '"?!?! ' + reply2.upcase
# -----------------------------------------------------------------------------
# line_with = 70

# puts "Table of contents".center(line_with)
# puts "Chapter 1:" + " Numbers".ljust(line_with/2 + 5) + "page 1"
# puts "Chapter 2:" + " Letters".ljust(line_with/2 + 5) + "page 72"
# puts "Chapter 3:" + " Numbers".ljust(line_with/2 + 5) + "page 118"
# -----------------------------------------------------------------------------
# count = 99

# while (count > 0)

#     puts count.to_s + " bottles of beer on the wall, " + count.to_s + " bottles of beer."

#     if(count == 1)
#         count -= 1
#         puts "Take one down and pass it arround, no more bottles of beer on the wall."
#     else
#         count -= 1
#         puts "Take one down and pass it arround, " + count.to_s + " bottles of beer on the wall."
#     end
#     if(count == 0)
#         puts "No more bottles of beer on the wall, no more bottles of beer."
#         puts "Go to the store and buy some more, 99 bottles of beer on the wall"
#     end
# end
# -----------------------------------------------------------------------------

# isRunning = true

# while(isRunning)
#     answer = gets.chomp
    
#     if(answer == "BYE")
#         isRunning = false
#         puts "BYE,BYE KIDDO"
#     elsif(answer.length > 0 and answer.upcase == answer)
#         puts "NO, NOT SINCE " + rand(1930..1950).to_s + "!"
#     else
#         puts "HUH?! SPEAK UP, SONNY!"
#     end
# end
# -----------------------------------------------------------------------------
# is_running = true
# my_words = []

# while(is_running)
#     puts "Please type a word:"
#     word_to_add = gets.chomp
#     if(word_to_add.length <= 0)
#         is_running = false
#     else
#         my_words.push word_to_add
#     end
#     puts my_words.sort
# end
# -----------------------------------------------------------------------------
# line_with = 70
# chapter_number = [0,1,2,3,4,5]
# chapter_subject = ["Numbers", "Letters", "Strings", "Arrays", "Methods", "Random"]
# page_number = [1,72,118,212,279,339]

# puts "Table of contents".center(line_with)
# chapter_number.each do |chapter|
#     puts "Chapter " + chapter.to_s + ": " + chapter_subject[chapter].ljust(line_with/2) + " page " + page_number[chapter].to_s
# end
# -----------------------------------------------------------------------------
# puts "What year were you born?"
# year = gets.chomp
# puts "Which month?"
# month = gets.chomp
# puts "And finally: What day?"
# day = gets.chomp

# date_born = Time.mktime(year,month,day)

# seconds_lived = Time.new - date_born
# years_lived = seconds_lived / 60 / 60 / 24 / 365

# puts "SPANK! " * years_lived.round
# -----------------------------------------------------------------------------
# class Die
#     def roll
#         1 + rand(6)
#     end
# end

# dice = [Die.new, Die.new]

# dice.each do |die|
#     puts die.roll
# end

# puts Die.new.roll
#-----------------------------------------------------------------------------
