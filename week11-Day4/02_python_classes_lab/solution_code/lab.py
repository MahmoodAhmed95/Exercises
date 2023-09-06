import random

class BankAccount():
    def __init__(self,owner,balance):
        self.owner = owner
        self.balance = balance
        self.account_no = random.randint(111111111, 999999999)
    
    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def __str__(self):
        return f"Account {self.account_no} / Balance: {self.balance}"


ichihito = BankAccount("IchiHito", 2031)
nihito = BankAccount("NiHito", 192011)

ichihito.deposit(1000)
ichihito.withdraw(31)
print(ichihito)

nihito.deposit(1822)
print(nihito)