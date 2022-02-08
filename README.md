# 20220205-pig-dice-game
Dealing with local and global context, status controls, primitive logic implementation.
Additionally, I wanted to use a more beautiful replacement rather than using basic JavaScript popups, so I used swal2 (SweetAlert2) library for that.

### Pig (dice game) 

Pig is a simple dice spel first described in print in John Scarne in 1945. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.

Pig is one of a family of dice games described by Reiner Knizia as "jeopardy dice games", where the dominant type of decision is whether or not to jeopardize previous gains by rolling for potential greater gains.

### Gameplay
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn.
- If the player rolls any other number, it is added to their turn total and the player's turn continues.
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.

https://en.wikipedia.org/wiki/Pig_(dice_game)


### Screenshots

Welcome screen, beginning of the game.
![screely-1644332590038](https://user-images.githubusercontent.com/17750127/153015151-f1c0f5bc-49b4-4b87-8d46-9e2668eb08dd.png)


Player 1 (active player has a brighter background, so we know which player's turn) started rolling the dice. 
![screely-1644332621276](https://user-images.githubusercontent.com/17750127/153015163-c21f4adf-c473-4423-a455-b79df2ff43ce.png)


Player 1 decided to hold 7, so it is Player 2's turn. 
![screely-1644332633608](https://user-images.githubusercontent.com/17750127/153015167-cca7984c-b024-4542-be8a-33d33ab7e59b.png)


Player 2 took some risk, but collected points up to 23! There might be a 0, and all would be gone.
![screely-1644332668470](https://user-images.githubusercontent.com/17750127/153015171-c6cf2a53-a0ac-41ac-a338-15557bdd4858.png)


Player 2 held 23. You got how this is going. Now it is back and forth.
![screely-1644332702152](https://user-images.githubusercontent.com/17750127/153015175-80378950-796e-4efc-bc7f-d754bb66210b.png)


Oopps! When it is 1, all the current score is gone and it is next player's turn.
![screely-1644332747524](https://user-images.githubusercontent.com/17750127/153015179-d063f9de-0f22-4350-b859-803b7fc3deee.png)


And this is the final. Game is over now. Here is the SweetAlert message instead of ordinary alert.
![screely-1644332789802](https://user-images.githubusercontent.com/17750127/153015185-87d35c88-c2b6-4754-8724-f0b6dd40b849.png)
