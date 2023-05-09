// 1
function ifEven(a: number, b: number): number {
  return a % 2 === 0 ? a * b : a + b;
}
console.log("If Even", ifEven(2, 3));
console.log("If Odd", ifEven(3, 2));

// 2
function quaterNum(x: number, y: number): number {
  //       |
  //    4  |   1
  // ______|______
  //       |
  //    3  |   2
  //       |

  if (x > 0 && y > 0) {
    return 1;
  } else if (x > 0 && y < 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x < 0 && y > 0) {
    return 4;
  } else {
    return 0;
  }
}
console.log("Quater 1", quaterNum(2, 3));
console.log("Quater 2", quaterNum(2, -3));
console.log("Quater 3", quaterNum(-2, -3));
console.log("Quater 4", quaterNum(-2, 3));

///3
function sumPositive(a: number, b: number, c: number): number {
  let array: number[] = [a, b, c];
  let sum: number = array.reduce((a, b) => {
    if (b > 0) {
      return a + b;
    } else {
      return a;
    }
  }, 0);

  return sum;
}

console.log("Sum Positive", sumPositive(1, -2, 3));
console.log("Sum Positive", sumPositive(-1, 2, 3));
console.log("Sum Positive", sumPositive(1, 2, -3));


///4
function maxNum(a: number, b: number, c: number): number {
  return Math.max(a*b*c, a+b+c) + 3;
}
console.log("Max", maxNum(1, 2, 3));
console.log("Max", maxNum(1, 2, 0));
console.log("Max", maxNum(1, 2, -3));

///5
function grade(rating: number): string {
  if (rating >= 0 && rating <= 19) {
    return "F";
  } else if (rating >= 20 && rating <= 39) {
    return "E";
  } else if (rating >= 40 && rating <= 59) {
    return "D";
  } else if (rating >= 60 && rating <= 74) {
    return "C";
  } else if (rating >= 75 && rating <= 89) {
    return "B";
  } else if (rating >= 90 && rating <= 100) {
    return "A";
  } else {
    return "Invalid";
  }
}
console.log("Grade", grade(19));
console.log("Grade", grade(20));
console.log("Grade", grade(75));
console.log("Grade", grade(101));