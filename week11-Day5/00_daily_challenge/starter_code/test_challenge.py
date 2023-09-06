import unittest
from challenge import group_assignment

class TestGroupAssignment(unittest.TestCase):

    def test_group_assignment(self):
        students = [
            ("Abbas A", "Backend"), ("Abbas H", "React"),
            ("Abdulaziz H", "Design"), ("Ahmed A", "React"),
            ("Ahmed M", "Backend"), ("Ali H", "React"),
            ("Ali M", "Design"), ("Ali R", "React"),
            ("Fatima M", "Backend"), ("Hamad R", "Testing and Documentation"),
            ("Hamza S", "Design"), ("Hawra A", "Testing and Documentation"),
            ("Hawra M", "Design"), ("Jameela K", "Testing and Documentation"),
            ("Mahmood M", "Design"), ("Mohamed J", "Testing and Documentation"),
            ("Mohammad I", "React"), ("Mohammed A", "Backend"),
            ("Mohammed S", "Testing and Documentation"), ("Mustafa Q", "Backend"),
            ("Natheer H", "Testing and Documentation"), ("Noor M", "React"),
            ("Qasim A", "Design"), ("Rashid A", "Backend"),
            ("Sanam H", "Testing and Documentation"), ("Sayed M", "React"),
            ("Yusuf H", "Design"), ("Gilfoyle B", "Backend")
        ]

        expected_result = [
            ('Abbas A', 'Abdulaziz H', 'Abbas H', 'Hamad R'),
            ('Ahmed M', 'Ali M', 'Ahmed A', 'Hawra A'),
            ('Fatima M', 'Hamza S', 'Ali H', 'Jameela K'),
            ('Mohammed A', 'Hawra M', 'Ali R', 'Mohamed J'),
            ('Mustafa Q', 'Mahmood M', 'Mohammad I', 'Mohammed S'),
            ('Rashid A', 'Qasim A', 'Noor M', 'Natheer H'),
            ('Gilfoyle B', 'Yusuf H', 'Sayed M', 'Sanam H')
        ]

        result = group_assignment(students)
        self.assertEqual(result, expected_result)

if __name__ == '__main__':
    unittest.main()
