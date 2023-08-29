import unittest
from challenge import welcome_city

class TestWelcomeCity(unittest.TestCase):

    def test_welcome_single_name(self):
        result = welcome_city(['John'], 'Phoenix', 'Arizona')
        self.assertEqual(result, 'Hello, John! Welcome to Phoenix, Arizona!')

    def test_welcome_multiple_names(self):
        result = welcome_city(['John', 'Smith'], 'Phoenix', 'Arizona')
        self.assertEqual(result, 'Hello, John Smith! Welcome to Phoenix, Arizona!')

    def test_welcome_different_city_state(self):
        result = welcome_city(['Alice'], 'Los Angeles', 'California')
        self.assertEqual(result, 'Hello, Alice! Welcome to Los Angeles, California!')

if __name__ == '__main__':
    unittest.main()
