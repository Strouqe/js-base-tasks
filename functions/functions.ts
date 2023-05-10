///1
function dayOfWeek(num: number): string {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Please enter a number from 1 to 7";
  }
}
console.log("Day of week", dayOfWeek(1));
console.log("Day of week", dayOfWeek(2));
console.log("Day of week", dayOfWeek(3));
console.log("Day of week", dayOfWeek(7));
console.log("Day of week", dayOfWeek(8));

///2
function numToText(num: number): string {
  let numArray = num.toString().split("");
  let hundreds = "";
  let tens = "";
  let didgits = "";
  let dash = "";

  if (num === 0) {
    return "Zero";
  } else {
    switch (numArray[numArray.length - 3]) {
      case "0":
        hundreds = "";
        break;
      case "1":
        hundreds = "One hundred";
        break;
      case "2":
        hundreds = "Two hundred";
        break;
      case "3":
        hundreds = "Three hundred";
        break;
      case "4":
        hundreds = "Four hundred";
        break;
      case "5":
        hundreds = "Five hundred";
        break;
      case "6":
        hundreds = "Six hundred";
        break;
      case "7":
        hundreds = "Seven hundred";
        break;
      case "8":
        hundreds = "Eight hundred";
        break;
      case "9":
        hundreds = "Nine hundred";
        break;
      default:
        hundreds = "Please enter a number hundreds";
    }
    switch (numArray[numArray.length - 2]) {
      case "0":
        tens = "";
        break;
      case "1":
        switch (numArray[numArray.length - 1]) {
          case "0":
            tens = "Ten";
            break;
          case "1":
            tens = "Eleven";
            break;
          case "2":
            tens = "Twelve";
            break;
          case "3":
            tens = "Thirteen";
            break;
          case "4":
            tens = "Fourteen";
            break;
          case "5":
            tens = "Fifteen";
            break;
          case "6":
            tens = "Sixteen";
            break;
          case "7":
            tens = "Seventeen";
            break;
          case "8":
            tens = "Eighteen";
            break;
          case "9":
            tens = "Nineteen";
            break;
          default:
            tens = "Please enter a number teen";
        }
        break;
      case "2":
        tens = "Twenty";
        break;
      case "3":
        tens = "Thirty";
        break;
      case "4":
        tens = "Fourty";
        break;
      case "5":
        tens = "Fivty";
        break;
      case "6":
        tens = "Sixty";
        break;
      case "7":
        tens = "Seventy";
        break;
      case "8":
        tens = "Eightty";
        break;
      case "9":
        tens = "Ninety";
        break;
      default:
        tens = "Please enter a number tens";
    }
    if (numArray[numArray.length - 2] === "1") {
      didgits = "";
    } else {
      switch (numArray[numArray.length - 1]) {
        case "0":
          didgits = "";
          break;
        case "1":
          didgits = "one";
          break;
        case "2":
          didgits = "Two";
          break;
        case "3":
          didgits = "Three";
          break;
        case "4":
          didgits = "Four";
          break;
        case "5":
          didgits = "Five";
          break;
        case "6":
          didgits = "Six";
          break;
        case "7":
          didgits = "Seven";
          break;
        case "8":
          didgits = "Eight";
          break;
        case "9":
          didgits = "Nine";
          break;
        default:
          didgits = "Please enter a number dig";
      }
    }
  }
  if (
    numArray[numArray.length - 1] !== "0" &&
    numArray[numArray.length - 2] !== "0"
  ) {
    dash = numArray[numArray.length - 2] !== "1" ? "-" : "";
  }

  if (numArray.length === 3) {
    if (numArray[1] === "0" && numArray[2] === "0") {
      return hundreds;
    }
    return (
      hundreds +
      " and " +
      tens.toLocaleLowerCase() +
      dash +
      didgits.toLocaleLowerCase()
    );
  } else if (numArray.length === 2) {
    return tens + dash + didgits.toLocaleLowerCase();
  } else if (numArray.length === 1) {
    return didgits;
  } else {
    return "Enter a number from 0 to 999";
  }
}
console.log("test", numToText(0));
console.log("test", numToText(235));
console.log("test", numToText(315));
console.log("test", numToText(310));
console.log("test", numToText(930));
console.log("test", numToText(505));
console.log("test", numToText(100));
console.log("test", numToText(9));
console.log("test", numToText(55));
console.log("test", numToText(11));

///3

class Functions3 {
  inputString: string;
  constructor() {
    console.log("textToNum 0", this.textToNum("Zero"));
    console.log("textToNum 235", this.textToNum("Two hundred and thirty-five"));
    console.log("textToNum 315", this.textToNum("Three hundred and fifteen"));
    console.log("textToNum 310", this.textToNum("Three hundred and ten"));
    console.log("textToNum 930", this.textToNum("Nine hundred and thirty"));
    console.log("textToNum 505", this.textToNum("Five hundred and five"));
    console.log("textToNum 100", this.textToNum("One hundred"));
    console.log("textToNum 9", this.textToNum("Nine"));
    console.log("textToNum 55", this.textToNum("Fifty-five"));
    console.log("textToNum 11", this.textToNum("Eleven"));
  }

  hundreds(input: string): number {
    switch (input.toLowerCase()) {
      case "one":
        return 100;
      case "two":
        return 200;
      case "three":
        return 300;
      case "four":
        return 400;
      case "five":
        return 500;
      case "six":
        return 600;
      case "seven":
        return 700;
      case "eight":
        return 800;
      case "nine":
        return 900;
      default:
        return 0;
    }
  }

  tens(input: string): number {
    switch (input.toLowerCase()) {
      case "twenty":
        return 20;
      case "thirty":
        return 30;
      case "fourty":
        return 40;
      case "fifty":
        return 50;
      case "sixty":
        return 60;
      case "seventy":
        return 70;
      case "eightty":
        return 80;
      case "ninety":
        return 90;
      default:
        return 0;
    }
  }

  didgits(input: string): number {
    switch (input.toLowerCase()) {
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      case "four":
        return 4;
      case "five":
        return 5;
      case "six":
        return 6;
      case "seven":
        return 7;
      case "eight":
        return 8;
      case "nine":
        return 9;
      case "ten":
        return 10;
      case "eleven":
        return 11;
      case "twelve":
        return 12;
      case "thirteen":
        return 13;
      case "fourteen":
        return 14;
      case "fifteen":
        return 15;
      case "sixteen":
        return 16;
      case "seventeen":
        return 17;
      case "eighteen":
        return 18;
      case "nineteen":
        return 19;
      default:
        return 0;
    }
  }

  textToNum(inputString: string): number {
    let stringArray: string[] = inputString.split(" ");
    let tensString: string[] = stringArray[stringArray.length - 1].split("-");
    if (stringArray.length === 1 && tensString.length === 1) {
      return this.didgits(stringArray[0]);
    } else {
      return (
        this.hundreds(stringArray[0]) +
        this.tens(tensString[0]) +
        this.didgits(tensString[tensString.length - 1])
      );
    }
  }
}

const test = new Functions3();

///4

class Functions4 {


  constructor() {
    console.log("countDistance", this.countDistance([[5, 1], [1, 1]]));
    console.log("countDistance", this.countDistance([[5, 1], [-1, -1]]));
    console.log("countDistance", this.countDistance([[-5, 1], [-1, 1]]));
    console.log("countDistance", this.countDistance([[-5, 1], [1, 1]]));
    console.log("countDistance", this.countDistance([[5, -1], [1, 1]]));
    console.log("countDistance", this.countDistance([[5, -1], [1, -1]]));
    console.log("countDistance", this.countDistance([[-5, -1], [-1, -1]]));
  }

  singleAxisDistance(a, b): number {
    return Math.abs(a - b);
  }

  countDistance([[x, y], [a, b]]: number[][]) {
    let sum: number = 0;
    if (x - a === 0 || y - b === 0) {
      sum = this.singleAxisDistance(x, a) + this.singleAxisDistance(y, b);
    } else {
      sum = Math.sqrt(
        Math.pow(this.singleAxisDistance(x, a), 2) +
        Math.pow(this.singleAxisDistance(y, b), 2)
      );
    }
    return sum;
  }
}

const test4 = new Functions4();
