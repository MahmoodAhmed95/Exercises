# Challenge: Welcome City
# Function name: welcome_city
# Codewars: https://www.codewars.com/kata/5302d846be2a9189af0001e4
# Kata Level: 8 kyu
# Prompt:
# Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

# Example:

# ['John', 'Smith'], 'Phoenix', 'Arizona'
# This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


# Your solution for here:
def welcome_city(name, city, state):
    return f"Hello, {' '.join(name)}! Welcome to {city}, {state}!"
