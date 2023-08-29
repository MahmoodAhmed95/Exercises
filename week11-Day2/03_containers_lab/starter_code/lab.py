# Exercise 1

#     Create a list named students containing some student names (strings).
students = ["Mahmood", "Mohammed", "Ali", "Ebrahim", "Ahmed"]
#     Print out the second student's name.
print(students[1])
#     Print out the last student's name.
print(students[-1])

# Exercise 2

#     Create a tuple named foods containing the same number of foods (strings) as there are names in the students list.
foods = ("Apple", "Banana", "Orange", "Mango", "Peach")
#     Use a for loop to print out the string "[food goes here] is a good food".
for food in foods:
    print(f"{food} is a good food")
# Exercise 3

#     Using a for loop, print just the last two food strings from foods.
for i in range(len(foods)):
    if i == len(foods) - 1 or i == len(foods) - 2:
        print(foods[i])
#         Hint: Use the slice operator to select the last two foods

# Exercise 4

#     Create a dictionary named home_town containing the keys of city, state and population.
home_town = {"city": "Duraz", "state": "Manama", "population": 30000}

#     Print a string with this format:
#     "I was born in city, state - population of population"
print(
    f"I was born in {home_town['city']}, {home_town['state']} - population of {str(home_town['population'])}"
)

# Exercise 5

#     Iterate over the key: value pairs in home_town and print a string for each item, for example:
#     "city = Arcadia"
#     "state = California"
#     "population = 58000"
for key, val in home_town.items():
    print(f"{key} , {val}")
# Exercise 6

#     Create an empty list named cohort.
cohort = []
#     Using a for loop to iterate over the students list.
#         Hint: Use the enumerate function to provide both the index & student
for i, student in enumerate(students):
    #     Within the for loop, add a dictionary to the cohort list that combines the student's name and the food in the foods list at the same index. Each dictionary will have this shape:
    #      {
    #        'student': 'Tina',
    #        'fav_food': 'Cheeseburger'
    #      }
    cohort.append({"student": student, "fav_food": foods[i]})
#     Iterate over the cohort list, printing out each item (it's not necessary to format the dictionaries).
for item in cohort:
    print(item)
# Exercise 7

#     Using the list of students and a list comprehension, assign to a variable named awesome_students a new list containing strings similar to this:
#     ["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]
#     Iterate over the awesome_students list, printing out each string.
awesome_students = []
for student in students:
    awesome_students += [student + " is awesome!"]
for awesome in awesome_students:
    print(awesome)
# Exercise 8

#     Use a for loop to iterate over a list comprehension that filters the foods tuple to only include food strings that contains the letter a.
#     Within the for loop, print each food string.
for food in foods:
    if "a" in food:
        print(food)
