# Challenge: SEI-05 Group Assignments
# Function name: group_assignment
# Codewars: CUSTOM
# Kata Level: CUSTOM
# Prompt:
# The instructors for SEI-05 in Bahrain are stuck trying to figure how to determine the group assignments for project 4.
# They would like to keep every group as balanced as possible. Every student has a strong suit either "React", "Backend", "Design" or "Testing and Documentation".
# Can you help your instructors and come up with an algorithm that takes a list of tuples consisting of a name and skill ("Mohammed", "Backend") and return a list of tuple consisting of the team assignment (number 1-7) and a list of names in that group so that each group has exactly one of each skill. Assume there are exactly 28 students.

# Example:

# students = [
#     ("Abbas A", "Backend"),
#     ("Abbas H", "React"),
#     ("Abdulaziz H", "Design"),
#     ("Ahmed A", "React"),
#     ("Ahmed M", "Backend"),
#     ("Ali H", "React"),
#     ("Ali M", "Design"),
#     ("Ali R", "React"),
#     ("Fatima M", "Backend"),
#     ("Hamad R", "Testing and Documentation"),
#     ("Hamza S", "Design"),
#     ("Hawra A", "Testing and Documentation"),
#     ("Hawra M", "Design"),
#     ("Jameela K", "Testing and Documentation"),
#     ("Mahmood M", "Design"),
#     ("Mohamed J", "Testing and Documentation"),
#     ("Mohammad I", "React"),
#     ("Mohammed A", "Backend"),
#     ("Mohammed S", "Testing and Documentation"),
#     ("Mustafa Q", "Backend"),
#     ("Natheer H", "Testing and Documentation"),
#     ("Noor M", "React"),
#     ("Qasim A", "Design"),
#     ("Rashid A", "Backend"),
#     ("Sanam H", "Testing and Documentation"),
#     ("Sayed M", "React"),
#     ("Yusuf H", "Design"),
#     ("Gilfoyle B", "Backend"),
# ]

# Outcome should be:

# [
#     ('Abbas A', 'Abdulaziz H', 'Abbas H', 'Hamad R'),
#     ('Ahmed M', 'Ali M', 'Ahmed A', 'Hawra A'),
#     ('Fatima M', 'Hamza S', 'Ali H', 'Jameela K'),
#     ('Mohammed A', 'Hawra M', 'Ali R', 'Mohamed J'),
#     ('Mustafa Q', 'Mahmood M', 'Mohammad I', 'Mohammed S'),
#     ('Rashid A', 'Qasim A', 'Noor M', 'Natheer H'),
#     ('Gilfoyle B', 'Yusuf H', 'Sayed M', 'Sanam H')
# ]


# Your solution for here:
def group_assignment(students):
    # type all skills in list
    skills = ["Backend", "React", "Design", "Testing and Documentation"]
    # create a dictionary and inside it list for each skill
    new_students_skills = {skill: [] for skill in skills}
    for student, skill in students:
        # append studendts depend on his skill
        new_students_skills[skill].append(student)
    # create a groups list
    final_groups = []
    # for each list only one skill student
    for i in range(len(new_students_skills)):
        # create one group for every 4 student
        sub_group = []
        # for each skill add one student
        for skill in new_students_skills:
            # append one sudent from one skill
            sub_group.append(new_students_skills[skill][i])
        # append the group in groups list
        final_groups.append(sub_group)
    return final_groups


# group_assignment(students)
