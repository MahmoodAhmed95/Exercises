# <img src="https://i.imgur.com/MFwPksl.png" style="width:45%">
# <img src="https://i.imgur.com/m7z7Fcd.jpg" style="width:45%">

# # Py-Pac-Poe Python Lab

# ---
# ## Getting Started

# Create a new python language [replit](https://replit.com) named `Py-Pac-Poe`.

# ## User Stories

# - As a player (AAP), I want to see a welcome message at the start:

# 	```
# 	----------------------
# 	Let's play Py-Pac-Poe!
# 	----------------------
# 	```

# - AAP, before being prompted for a move, I want to see the board printed out in the console, so that I know what moves have been made:

# 	```
# 	    A   B   C

# 	1)  X |   | O
# 	   -----------
# 	2)    | X |
# 	   -----------
# 	3)  X | O | O

# 	```

# - AAP, I want to be prompted with which player's move it is.

# - AAP, I want to be prompted on how to enter a valid move so that I don't make mistakes:

# 	```
# 	    A   B   C

# 	1)  X |   | O
# 	   -----------
# 	2)    | X |
# 	   -----------
# 	3)  X | O | O

# 	Player X's Move (example B2):
# 	```

# - AAP, I want to be able to enter my move's column letter in upper or lower case (a/A, b/B or c/C) to make it easier to enter my move.

# - AAP, if I enter a move in an invalid format, or if I try to occupy a cell already taken, I want to see a message chastising me and be re-prompted:

# 	```
# 	Player X's Move (example B2): Z9
# 	Bogus move! Try again...

# 	Player X's Move (example B2):
# 	```

# - AAP, at the end of a game I want to see who won the game:

# 	```
# 	Player X wins the game!
# 	```
# 	or if it was a tie

# 	```
# 	Another tie!
# 	```

# ## Hints

# - You can access, but not assign to global variables from within a function because doing so actually creates a new local variable instead (this is a downside of not have keywords like `let` used to define new variables).

# 	There's a couple of solutions.  One is use the `global` statement as follows:

# 	```python
# 	# Global variables
# 	board = {}
# 	turn = 'X'

# 	# Will not work
# 	def init_game():
# 	  # Will not work because this creates a new variable
# 	  # instead of assigning to the global board variable
# 	  board = {
# 	  	'a1': None, `b1`: None, 'c1' None,
# 	  	# etc
# 	  }
# 	  turn = 'X'

# 	# Do it like this
# 	def init_game():
# 	  # Use the global keyword to update global variables
# 	  global board, turn
# 	  board = {
# 	  	'a1': None, `b1`: None, 'c1' None,
# 	  	# etc
# 	  }
# 	  turn = 'X'
# 	```

# 	Using `global` is easy and works, however, it could be frowned upon by purists. Another approach would be to use a global dictionary named something like `state`, which could then be mutated (updated) without a problem:

# 	```python
# 	# Global variables
# 	state = {}

# 	# The following works
# 	def init_game():
# 	  state['board'] = {
# 	  	'a1': None, `b1`: None, 'c1' None,
# 	  	# etc
# 	  }
# 	  state['turn'] = 'X'
# 	```

# - Think through the game play of Tic-Tac-Toe and, if necessary, pseudocode it.

# - Think about how/where looping makes sense, e.g., loop until the player enters a correct move, until the game's over, etc.

# - Write several small functions, each performing a single purpose, e.g., `init_game`, `print_board`, `get_move`, `get_winner`, etc.

# - Modeling the board itself as a dictionary and naming the keys appropriately, can simplify updating the board based upon what the player types in. For example, assume you store the player's input in a variable named `move`, you can convert it to lower case using `.lower()`, and use it as the key to access the board, i.e., `board[move]`.

# - The `in` operator is a great way to check if the player has entered a valid coordinate (`a1`, `b1`, etc.).

# ## Bonus User Stories

# - AAP, I want to be prompted for a number of wins to play to before playing the first game.

# - AAP, I want to see the score after each game has ended:

# 	```
# 	SCORE:
# 	Player X: xx   Player O: xx   Ties: xx
# 	```

# - AAP, I want to see a congratulatory message when either player achieves the entered number of wins to play to:

# 	```
# 	Congrats to player X for winning 2 games!
# 	```
# Global variables
game_board = {}
current_turn = 'X'
player_wins = {'X': 0, 'O': 0, 'ties': 0}

def initialize_game():
    global game_board, current_turn
    game_board = {
        'a1': None, 'b1': None, 'c1': None,
        'a2': None, 'b2': None, 'c2': None,
        'a3': None, 'b3': None, 'c3': None
    }
    current_turn = 'X'

def display_board():
    print("\n    A   B   C\n")
    print("1)  {} | {} | {} ".format(game_board['a1'] or ' ', game_board['b1'] or ' ', game_board['c1'] or ' '))
    print("   -----------")
    print("2)  {} | {} | {} ".format(game_board['a2'] or ' ', game_board['b2'] or ' ', game_board['c2'] or ' '))
    print("   -----------")
    print("3)  {} | {} | {} ".format(game_board['a3'] or ' ', game_board['b3'] or ' ', game_board['c3'] or ' '))
    print()

def get_player_move():
    while True:
        move = input("Player {}'s Move (example B2): ".format(current_turn)).lower()
        if len(move) == 2 and move[0] in 'abc' and move[1] in '123':
            if game_board[move] is None:
                return move
            else:
                print("That cell is already occupied! Try again...")
        else:
            print("Invalid move format! Try again...")

def update_game_board(move):
    game_board[move] = current_turn

def check_winner():
    winning_combinations = [
        ['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'],
        ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'],
        ['a1', 'b2', 'c3'], ['a3', 'b2', 'c1']
    ]
    for combination in winning_combinations:
        if game_board[combination[0]] == game_board[combination[1]] == game_board[combination[2]] is not None:
            return game_board[combination[0]]
    if all(game_board[cell] is not None for cell in game_board):
        return 'tie'
    return None

def display_score():
    print("\nSCORE:")
    print("Player X: {}   Player O: {}   Ties: {}\n".format(player_wins['X'], player_wins['O'], player_wins['ties']))

def play_game():
    global current_turn
    while check_winner() is None:
        display_board()
        move = get_player_move()
        update_game_board(move)
        current_turn = 'O' if current_turn == 'X' else 'X'
    display_board()
    winner = check_winner()
    if winner == 'tie':
        print("Another tie!")
        player_wins['ties'] += 1
    else:
        print("Player {} wins the game!".format(winner))
        player_wins[winner] += 1
    display_score()

def play_custom_tic_tac_toe(wins_to_play):
    global player_wins
    print("----------------------")
    print("Let's play Custom Tic-Tac-Toe!")
    print("----------------------\n")
    player_wins = {'X': 0, 'O': 0, 'ties': 0}
    print("Play to {} wins!\n".format(wins_to_play))
    while player_wins['X'] < wins_to_play and player_wins['O'] < wins_to_play:
        initialize_game()
        play_game()
    if player_wins['X'] >= wins_to_play:
        print("Congrats to player X for winning {} games!".format(wins_to_play))
    else:
        print("Congrats to player O for winning {} games!".format(wins_to_play))

play_to = int(input("Enter the number of wins to play to: "))
play_custom_tic_tac_toe(play_to)

