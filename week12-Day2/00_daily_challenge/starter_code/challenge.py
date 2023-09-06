# Challenge: Last person standing
# Function name: last_person_standing
# Codewars: https://www.codewars.com/kata/567c26df18e9b1083a000049
# Kata Level: 7 kyu
# Prompt:
# Object
# Find the last number between 1 and n (inclusive) that survives the elimination process

# How It Works
# Start with the first number on the left then remove every other number moving right until you reach the the end, then from the numbers remaining start with the first number on the right and remove every other number moving left, repeat the process alternating between left and right until only one number remains which you return as the "last person standing"

# Example
# given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

# start by removing from the left    2   4   6   8


# then from the right                2       6


# then the left again                        6


# until we end with `6` as the last person standing


# Your solution for here:
def last_person_standing(n):
    nList = list(range(1, n + 1))
    while len(nList) > 1:
        nList = [nList[i] for i in range(len(nList)) if i % 2 == 1]
        nList.reverse()
    return nList[0]
