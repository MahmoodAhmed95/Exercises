
# Challenge: Friend or Foe?
# Function name: friend_or_foe
# Codewars: https://www.codewars.com/kata/55b42574ff091733d900002f
# Kata Level: 7 kyu
# Prompt:

# Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# i.e.

# friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
# Note: keep the original order of the names in the output.

# Your solution for here:
def friend_or_foe(friends):
        return [myfr for myfr in friends if len(myfr) == 4]





# ===================================== BONUS =====================================
# Challenge: After(?) Midnight
# Function name: after_midnight
# Codewars: https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746
# Kata Level: 7 kyu
# Prompt:

# Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

# Examples
#       0  =>  should return 'Sunday 00:00'
#      -3  =>  should return 'Saturday 23:57'
#      45  =>  should return 'Sunday 00:45'
#     759  =>  should return 'Sunday 12:39'
#    1236  =>  should return 'Sunday 20:36'
#    1447  =>  should return 'Monday 00:07'
#    -1447 =>  should return 'Friday 23:53'
#    7832  =>  should return 'Friday 10:32'
#   18876  =>  should return 'Saturday 02:36'
#  259180  =>  should return 'Thursday 23:40' 
# -349000  =>  should return 'Tuesday 15:20'

# Your solution for here:
def after_midnight(mins):
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return "{} {:02d}:{:02d}".format(days[(mins // 1440) % 7], (mins // 60) % 24, mins % 60)    
