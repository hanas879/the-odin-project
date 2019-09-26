class OrangeTree
    def initialize
        @height = 0
        @age = 0
        @date = Time.new
        @orange_count = 0
        puts "You planted a tree on " + @date.day.to_s + "." + @date.month.to_s + "." + @date.year.to_s + "!"
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
            height
        end
    end

    def countTheOranges
        if @orange_count == 0
            puts "There is no oranges on the tree. Better luck next year"
        else
            puts "You see a total of " + @orange_count.to_s + "oranges"
        end
    end

end

tree = OrangeTree.new
tree.oneYearPasses
tree.countTheOranges


#produserer ikke noe de første 3 årene
#legge til countTheOranges(Hvor mange er på treet akkurat nå)
#legge til pickAnOrange(Fjerner 1 fra treet og forteller hvor god den var, gjerne lag flere randomme svar her) eller at det ikke er flere igjen på treet i år
#etter hvert år faller alle appelsinene av treet(countTheOranges)
#legg alt inn i en loop slik at man kan bruke "gets" til å "spille" spillet

