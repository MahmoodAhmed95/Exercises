
# Challenge: Tail Swap
# Function name: tail_swap
# Codewars: https://www.codewars.com/kata/5868812b15f0057e05000001
# Kata Level: 7 kyu
# Prompt:

# You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

# Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

# Examples
# ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
# ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

# Your solution for here:
def tail_swap(strings):
    parts = [s.split(':') for s in strings]
    if len(parts) == 2 and len(parts[0]) == 2 and len(parts[1]) == 2:
        return [f"{parts[0][0]}:{parts[1][1]}", f"{parts[1][0]}:{parts[0][1]}"]
    else:
        return strings
