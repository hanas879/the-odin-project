#write your code here
def ftoc number
    if number.is_a? Numeric
        (number - 32) * 5/9
    else
        "ERROR!"
    end
end

def ctof number
    if number.is_a? Numeric
        output = (number.to_f * 9/5) + 32
        if output % 1 == 0
            output.to_i
        else
            output.to_f
        end
    else
        "ERROR!"
    end
end