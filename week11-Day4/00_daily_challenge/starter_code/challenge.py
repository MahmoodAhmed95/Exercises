# Challenge: Remove Dublicate Elements
# Function name: remove_duplicates
# Codewars: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
# Kata Level: 8 kyu
# Prompt:
# Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
# Keep the first instance and remove all other instances...

# The order of the sequence has to stay the same.

# Examples:

# Input -> Output
# [1, 1, 2] -> [1, 2]
# [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


# Your solution for here:
# def remove_duplicates(li):
#     newLi = list(set(li))
#     return newLi


def remove_duplicates(li):
    uni_list = []
    for i in li:
        if i not in uni_list:
            uni_list.append(i)
    return uni_list
