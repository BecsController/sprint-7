Looping a triangle

var hash = '#';
while (hash <= '#######') {
  console.log(hash);
  hash = hash += '#';
}

FizzBuzz

for (var number = 1; number <= 100; number++) {
  var result = '';
  if (number % 3 == 0)
    result += "Fizz";
  if (number % 5 == 0)
     result += "buzz";
    console.log(result || number);
  }

  Chessboard

  var chessBoard = "";
  for (var w = 1; w < 8; w++) {

    for (var b = 0; b < 8; b++) {

      if ((w + b) % 2 == 0)
        chessBoard += " ";
      else
        chessBoard += "#";
    }
    chessBoard += "\n";
  }

  console.log(chessBoard);
