import unittest
from challenge import remove_duplicates

class TestRemoveDuplicates(unittest.TestCase):

    def test_remove_duplicates(self):
        self.assertEqual(remove_duplicates([1, 1, 2]), [1, 2])
        self.assertEqual(remove_duplicates([1, 2, 1, 1, 3, 2]), [1, 2, 3])
        self.assertEqual(remove_duplicates([4, 4, 4, 4]), [4])
        self.assertEqual(remove_duplicates([9, 8, 7, 6, 5]), [9, 8, 7, 6, 5])

if __name__ == '__main__':
    unittest.main()
