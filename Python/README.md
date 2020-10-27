Python for Humans

## [A comprehensive Python CheatSheet](https://github.com/gto76/python-cheatsheet)

# DS-Algorithms-for-humans

Q1.
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.

A spider is standing at the origin (0, 0) of a Cartesian plane and wants to move to the point (x, y). At each step, the spider can only move one square in two of the four directions: U(up), D(down,), L(left), R(right), depending on where it is heading:

if x ≥ 0, y ≥ 0. The spider can only go U or R.
if x ≥ 0, y ≤ 0. The spider can only go D or R.
if x ≤ 0, y ≥ 0. The spider can only go U or L.
if x ≤ 0, y ≤ 0. The spider can only go D or L.
Find the number of ways for the spider to get to the given point (x, y).

Example

For x = 2 and y = -2, the output should be
spiderMove(x, y) = 6.

There are only 6 ways:

RRDD;
RDRD;
RDDR;
DRRD;
DRDR;
DDRR.
For x = -3 and y = 0, the output should be
spiderMove(x, y) = 1.

There is only one way:

LLL.
For x = 0 and y = 0, the output should be
spiderMove(x, y) = 1.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer x

Guaranteed constraints:
-15 ≤ x ≤ 15.

[input] integer y

Guaranteed constraints:
-5 ≤ y ≤ 25.

[output] integer

It is guaranteed that the answer is smaller than 231.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

```js
function spiderMove(x, y) {

  x = Math.abs(x);
  y = Math.abs(y);

  var n = [];
  for (var i = 0; i < x + 1; i++) {
    n.push(1);
  }

  for (var i = 0; i < y; i++) {
    for (var j = 1; j < x + 1; j++) {
      n[j] = n[j - 1] + n[j];
    }
  }
  return ...;
}

```

Q2. 
Avoid using built-in big integers to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Given two binary strings a and b, add them together and return the resulting string.

Example

For a = "1000" and b = "111", the output should be
addBinaryStrings(a, b) = "1111";
For a = "1" and b = "1", the output should be
addBinaryStrings(a, b) = "10".
Input/Output

[execution time limit] 4 seconds (js)

[input] string a

A string that can contain only 0 and 1.

Guaranteed constraints:
0 ≤ a.length ≤ 105.

[input] string b

A string that can contain only 0 and 1.

Guaranteed constraints:
0 ≤ b.length ≤ 105.

[output] string

The result of adding strings a and b, without any leading zeros.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

```js

function addBinaryStrings(a, b) {

}

```

Q3.

Given a rectangular matrix of English lowercase letters board and a string word, your task is to find the number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.

Example

For

board = [['s', 'o', 's', 'o'],
         ['s', 'o', 'o', 's'],
         ['s', 's', 's', 's']]
and word = "sos", the output should be wordCount(board, word) = 3.

There are 2 occurrences of word starting from board[0][0](going → and ↘), and one starting from board[0][2](going ↓).

No other occurrences of word were counted, so the answer is 3.

For

board = [['a', 'a'],
         ['a', 'a']]
and word = "aa", the output should be
wordCount(board, word) = 5.

There are 2 horizontal, 2, vertical, and 1 diagonal occurrence of word, for a total of 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char board

A rectangular matrix of lowercase English letters.

Guaranteed constraints:
1 ≤ board.length ≤ 100,
1 ≤ board[0].length ≤ 100,
board[i].length = board[0].length.

[input] string word

A string consisting of lowercase English letters.

Guaranteed constraints:
2 ≤ word.length ≤ 100.

[output] integer

The number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

```js
function wordCount(board, word) {

}


```

Linkedin Post:
CS Concepts - "Static Typing, Dynamic Typing, Strongly-Typed and Weakly-Typed" explained in 100 words:



Quite a lot of people get confused between these terms and  don't really understand the difference.



Static Typing & Dynamic Typing:



JAVA Code - int x = 4;



Here, the variable 'x' is assigned the type 'int'.



Whenever the type of x is to be changed either manually or dynamically (during run-time), it will throw an error at compilation, stating that it is not allowed.





