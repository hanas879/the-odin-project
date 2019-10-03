class Book
    def initialize
        @title = "placeholder"
    end

    def title= title
        @title = title
    end

    def title
        conjunctions = ["and", "in", "the", "of", "a", "an"]
        result = @title.split()
        result.map do |word|
            if !conjunctions.include?(word)
                word.capitalize!
            end
        end
        result.first.capitalize!
        result.join(" ")
    end
end