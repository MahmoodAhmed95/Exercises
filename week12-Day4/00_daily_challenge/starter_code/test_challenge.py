import unittest
from challenge import tail_swap

class TestSwapStrings(unittest.TestCase):
    def test_example_1(self):
        self.assertEqual(tail_swap(["abc:123", "cde:456"]), ["abc:456", "cde:123"])
    
    def test_example_2(self):
        self.assertEqual(tail_swap(["a:12345", "777:xyz"]), ["a:xyz", "777:12345"])
    
    # Add more test cases as needed

if __name__ == '__main__':
    unittest.main()
