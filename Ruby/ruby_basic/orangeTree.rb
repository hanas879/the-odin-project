is_playing = true
tree = 0

class OrangeTree
    def initialize
        @height = 0
        @age = 0
        @date = Time.new
        @orange_count = 0
        @yearly_yield_multiplier = 12
        puts "You planted a tree on " + @date.day.to_s + "." + @date.month.to_s + "." + @date.year.to_s + "!"
    end
    
    def date
        puts "The current date is: " + @date.day.to_s + "." + @date.month.to_s + "." + @date.year.to_s + "!"
    end

    def height
        if @height < 100
            puts "The tree is " + @height.to_s + "cm high!"
        elsif (@height % 100) == 0
            puts "The tree is " + (@height.to_f / 100).round(0).to_s + "m tall"
        else
            puts "The tree is " + (@height.to_f / 100).round(1).to_s + "m tall!"
        end
    end

    def oneYearPasses
        if @age >= 15
            puts "The tree died of old age.. You gotta plant another one :("
        else
            @date += 31536000
            @age += 1
            @height += 30
        end

        if @age >= 3
            @orange_count = @age * @yearly_yield_multiplier
        end
    end

    def countTheOranges
        if @orange_count == 0
            puts "There is no oranges on the tree. Better luck next year"
        else
            puts "You see a total of " + @orange_count.to_s + " oranges"
        end
    end

    def age
        puts "Your tree is " + @age.to_s + " years old!"
    end

    def randPhrase
        rand_num = rand(1..4)
        
        if rand_num == 1
            puts "You take a bite and it taste like heaven!"
        elsif rand_num == 2
            puts "The sweetness of the orange fills the body with joy"
        elsif rand_num == 3
            puts "Yummi!"
        elsif rand_num == 4
            puts "Munch.... SLURP"
        end
    end

    def pickAnOrange
        if @orange_count > 0
            @orange_count -= 1
            randPhrase
        else
            puts "There is no oranges to pick... Wait until next year and try again"
        end
    end

end

puts
puts "WELCOME TO MY ORANGE TREE SIMULATOR".rjust(55)
puts 
puts '--> To start please type "plant" <--'.rjust(56)
puts
puts 'Type "help" for options'.rjust(48)

while is_playing
    user_input = gets.chomp.downcase

    if user_input == "plant"
        tree = OrangeTree.new
    elsif user_input == "help"
        puts "Command"
    elsif user_input == "wait" && tree != 0
        tree.oneYearPasses
    elsif user_input == "age" && tree != 0
        tree.age
    elsif user_input == "pick" && tree != 0
        tree.pickAnOrange
    elsif user_input == "count" && tree != 0
        tree.countTheOranges
    elsif user_input == "height" && tree != 0
        tree.height
    elsif user_input == "date" && tree != 0
        tree.date
    elsif user_input == "exit" || user_input == "q"
        is_playing = false
    elsif user_input != "plant" || user_input != "wait" || user_input != "age" || user_input != "pick" || user_input != "count" || user_input != "height" || user_input != "date" || user_input != "exit"
        puts "That is no command! Read the fucking guide! I can't hardcode every single command you are tinking of..."
    else
        puts "There is no tree planted, please plant one and move on"
    end
end


#legg alt inn i en loop slik at man kan bruke "gets" til å "spille" spillet

