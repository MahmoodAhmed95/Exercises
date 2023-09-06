import unittest
from challenge import to_jaden_case

class TestJadenCase(unittest.TestCase):
    def test_basic_sentence(self):
        self.assertEqual(to_jaden_case("How can mirrors be real if our eyes aren't real"),
                         "How Can Mirrors Be Real If Our Eyes Aren't Real")

    def test_empty_string(self):
        self.assertEqual(to_jaden_case(""), "")

    def test_single_word(self):
        self.assertEqual(to_jaden_case("hello"), "Hello")

if __name__ == '__main__':
    unittest.main()
