# number 1
def sum_to(int):
    sum = 0
    for i in range(int + 1):
        sum += i
    print(sum)


sum_to(6)  # returns 21
sum_to(10)  # returns 55


# number 2
def largest(nList=[]):
    larger = 0
    for i in range(len(nList)):
        if nList[i] > larger:
            larger = nList[i]
    print(larger)


largest([1, 2, 3, 4, 0])  # returns 4
largest([10, 4, 2, 231, 91, 54])  # returns 231


# number 3
def occurrences(str, char):
    print(str.count(char))


occurrences("fleep floop", "e")  # returns 2
occurrences("fleep floop", "p")  # returns 2
occurrences("fleep floop", "ee")  # returns 1
occurrences("fleep floop", "fe")  # returns 0


# number 4
def product(*arb):
    sum = 1
    for i in range(len(arb)):
        sum *= arb[i]
    print(sum)


product(-1, 4)  # returns -4
product(2, 5, 5)  # returns 50
product(4, 0.5, 5)  # returns 10.0


# Bonus
def steps_to_zero(n):
    steps = 0
    while n > 0:
        if n % 2 == 0:
            n = n // 2
        else:
            n = n - 1
        steps += 1
    print(steps)


steps_to_zero(14)  # returns 6
steps_to_zero(100)  # returns 9
steps_to_zero(200)  # returns 10
steps_to_zero(300)  # returns 12
