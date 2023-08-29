
# Challenge: Double Char
# Function name: double_char
# Codewars: https://www.codewars.com/kata/56b1f01c247c01db92000076
# Kata Level: 8 kyu
# Prompt:
# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# Examples (Input -> Output):
# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "

# Your solution for here:
def double_char(str):
    newStr=""
    for char in str:
        newStr+= char*2
    return newStr
print(double_char("String"))
print(double_char("Hello World"))
print(double_char("1234!_ "))