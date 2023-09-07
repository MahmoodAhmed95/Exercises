import unittest
from challenge import after_midnight

class TestAfterMidnight(unittest.TestCase):
    
    def test_example_1(self):
        self.assertEqual(after_midnight(0), 'Sunday 00:00')
        
    def test_example_2(self):
        self.assertEqual(after_midnight(-3), 'Saturday 23:57')
        
    def test_example_3(self):
        self.assertEqual(after_midnight(45), 'Sunday 00:45')
        
    def test_example_4(self):
        self.assertEqual(after_midnight(759), 'Sunday 12:39')
        
    def test_example_5(self):
        self.assertEqual(after_midnight(1236), 'Sunday 20:36')
        
    def test_example_6(self):
        self.assertEqual(after_midnight(1447), 'Monday 00:07')
        
    def test_example_7(self):
        self.assertEqual(after_midnight(-1447), 'Friday 23:53')
        
    def test_example_8(self):
        self.assertEqual(after_midnight(7832), 'Friday 10:32')
        
    def test_example_9(self):
        self.assertEqual(after_midnight(18876), 'Saturday 02:36')
        
    def test_example_10(self):
        self.assertEqual(after_midnight(259180), 'Thursday 23:40')
        
    def test_example_11(self):
        self.assertEqual(after_midnight(-349000), 'Tuesday 15:20')

if __name__ == '__main__':
    unittest.main()
