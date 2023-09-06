# Put this line at the top of the repl
import random


class BankAccount:
    def __init__(self, owner, balance, has_overdraft=False):
        self.owner = owner
        self.balance = balance
        self.account_no = random.randint(111111111, 999999999)
        self.has_overdraft = has_overdraft

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance and self.has_overdraft or amount <= self.balance:
            self.balance -= amount
        return self.balance

    def __str__(self):
        return f"Account {self.account_no} / Balance: {self.balance}"


class SavingBankAccount(BankAccount):
    def withdraw(self, amount):
        return "No withdrawals permitted"


# class SavingBankAccount:
#     def __init__(self, owner, balance):
#         self.owner = owner
#         self.balance = balance
#         self.account_no = random.randint(111111111, 999999999)

#     def deposit(self, amount):
#         self.balance += amount

#     def withdraw(self, text):
#         self.text = text
#         text = "No withdrawals permitted"
#         return self.text


#     def __str__(self):
#         return f"Account {self.account_no} / Balance: {self.balance}"
