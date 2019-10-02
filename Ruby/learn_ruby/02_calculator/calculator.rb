#write your code here
def add num1,num2
    num1 + num2
end

def subtract num1,num2
    num1 - num2
end

def sum array
    output = 0

    if array.empty?
        "ERROR! EMPTY ARRAY"
    else
        array.each do |num|
            output = output + num
        end
    end
    output
end

def multiply num1,num2
    num1 * num2
end

def power num1,num2
    num1 ** num2
end

def factorial num
    result = 1

    if num == 0
        1
    else
        while num > 0 do
            result = result * num
            num -= 1
        end
    end
    result
end