import unittest
from challenge import phonetic_nato

class TestNatoAlphabet(unittest.TestCase):

    def test_example_1(self):
        self.assertEqual(phonetic_nato("hi"), "Hotel India")

    def test_example_2(self):
        self.assertEqual(phonetic_nato("abc"), "Alpha Bravo Charlie")

    def test_example_3(self):
        self.assertEqual(phonetic_nato("babble"), "Bravo Alpha Bravo Bravo Lima Echo")

    def test_example_4(self):
        self.assertEqual(phonetic_nato("Banana"), "Bravo Alpha November Alpha November Alpha")

if __name__ == '__main__':
    unittest.main()
