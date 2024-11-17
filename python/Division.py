##
# Using the JavaScript language, have the function Division(num1,num2)
# take both parameters being passed and return the Greatest Common Factor.
# That is, return the greatest number that evenly goes into both numbers with no remainder.
# For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
# The range for both parameters will be from 1 to 10^3.
##

def division(a, b):
    if a < 1 or b < 1 or a > 1000 or b > 1000:
        return "Values must be between 1 and 10^3";

    for x in reversed(range(a)):
        if a % x == 0 and b % x == 0:
            return x


print(division(12, 16))
print(division(7, 3))
print(division(36, 54))
print(division(16, 12))
print(division(-1, 12))
print(division(12, 12000))

