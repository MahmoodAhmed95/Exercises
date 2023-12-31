# exercise-01 Vowel or Consonant

# Write the code that:
# 1. Prompts the user to enter a letter in the alphabet:
#      Please enter a letter from the alphabet (a-z or A-Z): 
letter = input("Please enter a letter from the alphabet (a-z or A-Z):").lower()
# 2. Write the code that determines whether the letter entered is a vowel
if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
# 3. Print one of following messages (substituting the letter for x):
    print(f"The letter {letter} is a vowel")
#      - The letter x is a vowel
else :
    print(f"The letter {letter} is a consonant")
#      - The letter x is a consonant

# Hints:  Use the in operator to check if a character is in another string
#         For example, if some_char in 'abc':





# exercise-02 Length of Phrase
phrase=""
while phrase != 'quit':
# Write the code that:
# 1. Prompts the user to enter a phrase:
    phrase = input("Please enter a word or phrase: ")
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
    long = len(phrase)
    print(f"What you entered is {long} characters long")
# 3. Return to step 1, unless the word 'quit' was entered.





# exercise-03 Calculate Dog Years

# Write the code that:
# 1. Prompts the user to enter a dog's age like this:
#      Input a dog's age: 
age = int(input("Input a dog's age:"))
# 2. Calculates the equivalent dog years, where:
#      - The first two years count as 10 years each
#      - Any remaining years count as 7 years each
if age < 3 :
    age*=10
elif age >2 :
    age=(7*(age-2))+20
# 3. Prints the answer in the following format:
#      The dog's age in dog years is xx
print(f"The dog's age in dog years is {age}")
# Hints:
# Use the int() function to convert the string returned from input() into an integer
# Start with an if that checks if the age is less than 3





# exercise-04 What kind of Triangle?

# Write the code that:
# 1. Prompts the user to enter the three lengths of a triangle (one at a time):
#      Enter the lengths of three side of a triangle:
#      a: 
#      b:
#      c:
a= int(input("a:"))
b= int(input("b:"))
c= int(input("c:"))
# 2. Write the code that determines if the triangle is:
#      equilateral - all three sides are equal in length
#      scalene - all three sides are unequal in length
#      isosceles - exactly two sides are the same length
sides= ""
if a==b and a==c :
    sides = "equilateral"
elif (a==c and a!=b)  or (a==b and a!=c) or (b==c and b!=a) :
    sides="isocelses"
else:
    sides ="scalene"
# 3. Print a message such as:
#      - A triangle with sides of <a>, <b> & <c> is a <type of triangle> triangle

print(f"A triangle with sides of {a}, {b} & {c} is a {sides} triangle")




# exercise-05 Fibonacci sequence for first 50 terms

# Write the code that:
# 1. Calculates and prints the first 50 terms of the fibonacci sequence.
# 2. Print each term and number as follows:
#      term: 0 / number: 0
#      term: 1 / number: 1
#      term: 2 / number: 1
#      term: 3 / number: 2
#      term: 4 / number: 3
#      term: 5 / number: 5
#      etc.

# Hints:
# The next number is found by adding the two numbers before it
# Use a while loop with a looping variable, or look into Python ranges, e.g.:
#   for n in range(50):
n1,n2 = 0,1
for n in range(50):
    if n>0:
        n1,n2 = n2, n2+n1
    print(f"term: {n} / number: {n1}")




# exercise-06 What's the Season?

# Write the code that:
# 1. Prompts the user to enter the month (as three characters):
#      Enter the month of the year (Jan - Dec):
month= input("Enter the month of the year (Jan - Dec):")
# 2. Then prompts the user to enter the day of the month: 
#      Enter the day of the month:
day= int(input("Enter the day of the month:"))

# 3. Calculate what season it is based upon this chart:
#      Dec 21 - Mar 19: Winter
#      Mar 20 - Jun 20: Spring
#      Jun 21 - Sep 21: Summer
#      Sep 22 - Dec 20: Fall
season=""
if month in ('Jan', 'Feb') or (month == 'Dec' and day>=21) or (month == 'Mar' and day <= 19):
    season = "Winter"
if month in ('Apr', 'May') or (month == 'Mar' and day>=20) or (month == 'Jun' and day <= 20):
    season= "Spring"
if month in ('Jul', 'Aug') or (month == 'Jun' and day>=21) or (month == 'Sep' and day <= 21):
    season="Summer"
if month in ('Jan', 'Feb') or (month == 'Sep' and day>=22) or (month == 'Dec' and day <= 20):
    season="Fall"
# 4. Print the result as follows:
#      <Mmm> <dd> is in <season> 
print(f"{month} {day} is in {season} ")
# Hints:
# Consider using the in operator to check if a string is in a particular list/tuple like this:
#   if input_month in ('Jan', 'Feb', 'Mar'):
#
# After setting the likely season, you can use another if...elif...else statement to "adjust" if
# the day number falls within a certain range.



