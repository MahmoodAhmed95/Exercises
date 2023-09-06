import unittest
from challenge import double_char

class TestDoubleChar(unittest.TestCase):

    def test_example_cases(self):
        self.assertEqual(double_char("String"), "SSttrriinngg")
        self.assertEqual(double_char("Hello World"), "HHeelllloo  WWoorrlldd")
        self.assertEqual(double_char("1234!_ "), "11223344!!__  ")

    def test_empty_string(self):
        self.assertEqual(double_char(""), "")
    
    def test_single_space_string(self):
        self.assertEqual(double_char(" "), "  ")

    def test_single_char(self):
        self.assertEqual(double_char("A"), "AA")

if __name__ == '__main__':
    unittest.main()
