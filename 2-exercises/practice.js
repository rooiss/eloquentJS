// 1
// const triangle = () => {
//   const pyramid = [];
//   for (let i = 0; i < 8; i++) {
//     pyramid.push("#");
//     console.log(pyramid.join(""));
//   }
// };

// triangle();

// 2 fizzbuzz
// const fizzbuzz = () => {
//   for (let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzbuzz();

// 3 chessboard
const chessboard = (grid) => {
  const row = [" ", "#", " ", "#", " ", "#", " ", "#"];
  const row2 = ["#", " ", "#", " ", "#", " ", "#", " "];
  for (let i = 0; i < grid; i++) {
    if (i % 2 === 0) {
      console.log(row.join(""));
    } else {
      console.log(row2.join(""));
    }
  }
};
chessboard(16);
