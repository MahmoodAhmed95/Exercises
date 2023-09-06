import unittest
from challenge import last_person_standing

class TestLastPersonStanding(unittest.TestCase):

    def test_example_1(self):
        self.assertEqual(last_person_standing(9), 6)

    def test_example_2(self):
        self.assertEqual(last_person_standing(7), 4)

    def test_example_3(self):
        self.assertEqual(last_person_standing(12), 6)

    def test_example_4(self):
        self.assertEqual(last_person_standing(1), 1)

    def test_example_5(self):
        self.assertEqual(last_person_standing(3), 2)

if __name__ == '__main__':
    unittest.main()
