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
function numToText1(num: number): string {
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
console.log("test", numToText1(0));
console.log("test", numToText1(235));
console.log("test", numToText1(315));
console.log("test", numToText1(310));
console.log("test", numToText1(930));
console.log("test", numToText1(505));
console.log("test", numToText1(100));
console.log("test", numToText1(9));
console.log("test", numToText1(55));
console.log("test", numToText1(11));

///3

class Functions3 {
  inputString: string;
  constructor() {
    // console.log("textToNum 0", this.textToNum("Zero"));
    // console.log("textToNum 235", this.textToNum("Two hundred and thirty-five"));
    // console.log("textToNum 315", this.textToNum("Three hundred and fifteen"));
    // console.log("textToNum 310", this.textToNum("Three hundred and ten"));
    // console.log("textToNum 930", this.textToNum("Nine hundred and thirty"));
    // console.log("textToNum 505", this.textToNum("Five hundred and five"));
    // console.log("textToNum 100", this.textToNum("One hundred"));
    // console.log("textToNum 9", this.textToNum("Nine"));
    // console.log("textToNum 55", this.textToNum("Fifty-five"));
    // console.log("textToNum 11", this.textToNum("Eleven"));
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
    console.log(
      "countDistance",
      this.countDistance([
        [5, 1],
        [1, 1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [5, 1],
        [-1, -1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [-5, 1],
        [-1, 1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [-5, 1],
        [1, 1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [5, -1],
        [1, 1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [5, -1],
        [1, -1],
      ])
    );
    console.log(
      "countDistance",
      this.countDistance([
        [-5, -1],
        [-1, -1],
      ])
    );
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

///5

class ConvertNum {
  constructor() {
    // console.log("numToText 0", this.numToText(0));
    // console.log("numToText 235", this.numToText(235));
    // console.log("numToText 315", this.numToText(315));
    // console.log("numToText 310", this.numToText(310));
    // console.log("numToText 930", this.numToText(930));
    // console.log("numToText 505", this.numToText(505));
    // console.log("numToText 100", this.numToText(100));
    // console.log("numToText 9", this.numToText(9));
    // console.log("numToText 55", this.numToText(55));
    // console.log("numToText 11", this.numToText(11));
    // console.log("numToText 11", this.numToText(11));
    console.log("thousands 0", this.thousands(0));
    console.log("thousands 11", this.thousands(11));
    console.log("thousands 35", this.thousands(35));
    console.log("thousands 315", this.thousands(315));
    console.log("thousands 234", this.thousands(234));
    console.log("thousands 1,234", this.thousands(1234));
    console.log("thousands 7,873", this.thousands(7873));
    console.log("thousands 247,812", this.thousands(247812));
    console.log("thousands 967,873", this.thousands(967873));
    console.log("thousands 100,000", this.thousands(100000));
    console.log("millions 1,000,000", this.millions(1000000));
    console.log("millions 1,234,567", this.millions(1234567));
    console.log("millions 12,000,678", this.millions(12000678));
    console.log("millions 12,045,678", this.millions(12045678));
    console.log("millions 12,345,678", this.millions(12345678));
    console.log("millions 123,456,789", this.millions(123456789));
    console.log("billions 1,000,000,000", this.billions(1000000000));
    console.log("billions 1,234,567,890", this.billions(1234567890));
    console.log("billions 12,000,678,901", this.billions(12000678901));
    console.log("billions 12,045,678,901", this.billions(12045678901));
    console.log("billions 986,045,678,901", this.billions(986045678901));
    console.log("billions 900,000,000,000", this.billions(900000000000));
  }

  hundreds(array: string[]): string {
    switch (array[array.length - 3]) {
      case "1":
        return "One hundred";
      case "2":
        return "Two hundred";
      case "3":
        return "Three hundred";
      case "4":
        return "Four hundred";
      case "5":
        return "Five hundred";
      case "6":
        return "Six hundred";
      case "7":
        return "Seven hundred";
      case "8":
        return "Eight hundred";
      case "9":
        return "Nine hundred";
      default:
        return "";
    }
  }

  tens(array: string[]): string {
    switch (array[array.length - 2]) {
      case "1":
        switch (array[array.length - 1]) {
          case "0":
            return "Ten";
          case "1":
            return "Eleven";
          case "2":
            return "Twelve";
          case "3":
            return "Thirteen";
          case "4":
            return "Fourteen";
          case "5":
            return "Fifteen";
          case "6":
            return "Sixteen";
          case "7":
            return "Seventeen";
          case "8":
            return "Eighteen";
          case "9":
            return "Nineteen";
          case "2":
            return "Twenty";
          case "3":
            return "Thirty";
          case "4":
            return "Fourty";
          case "5":
            return "Fifty";
          case "6":
            return "Sixty";
          case "7":
            return "Seventy";
          case "8":
            return "Eightty";
          case "9":
            return "Ninety";
          default:
            return "";
        }
      case "2":
        return "Twenty";
      case "3":
        return "Thirty";
      case "4":
        return "Fourty";
      case "5":
        return "Fifty";
      case "6":
        return "Sixty";
      case "7":
        return "Seventy";
      case "8":
        return "Eightty";
      case "9":
        return "Ninety";
      default:
        return "";
    }
  }

  didgits(array: string[]) {
    if (array[array.length - 2] === "1") return "";
    switch (array[array.length - 1]) {
      case "1":
        return "One";
      case "2":
        return "Two";
      case "3":
        return "Three";
      case "4":
        return "Four";
      case "5":
        return "Five";
      case "6":
        return "Six";
      case "7":
        return "Seven";
      case "8":
        return "Eight";
      case "9":
        return "Nine";
      default:
        return "";
    }
  }

  numToText(num: number): string {
    let numArray = num.toString().split("");
    let hundreds = this.hundreds(numArray);
    let tens = this.tens(numArray);
    let didgits = this.didgits(numArray);
    let dash = "";

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
    }
    return didgits;
  }

  thousands(num: number): string {
    let numArray = num.toString().split("");
    let hundredssArray = numArray.slice(numArray.length - 3, numArray.length);
    let thousandsArray = numArray.slice(0, numArray.length - 3);
    if (numArray.length < 4) {
      return this.numToText(num);
    } else if (!hundredssArray.some((num) => num !== "0")) {
      return this.numToText(parseInt(thousandsArray.join(""))) + " thousand";
    }
    return (
      this.numToText(parseInt(thousandsArray.join(""))) +
      " thousand " +
      this.numToText(parseInt(hundredssArray.join("")))
    );
  }

  millions(num: number): string {
    let numArray = num.toString().split("");
    let thousandssArray = numArray.slice(numArray.length - 6, numArray.length);
    let millionsArray = numArray.slice(0, numArray.length - 6);
    if (numArray.length < 7) {
      return this.thousands(num);
    } else if (!thousandssArray.some((num) => num !== "0")) {
      return this.numToText(parseInt(millionsArray.join(""))) + " million";
    } else {
      return (
        this.numToText(parseInt(millionsArray.join(""))) +
        " million " +
        this.thousands(parseInt(thousandssArray.join("")))
      );
    }
  }

  billions(num: number): string {
    let numArray = num.toString().split("");
    let millionssArray = numArray.slice(numArray.length - 9, numArray.length);
    let billionsArray = numArray.slice(0, numArray.length - 9);
    if (numArray[0] === "0") {
      return "Zero";
    } else if (numArray.length < 10) {
      return this.millions(num);
    } else if (!millionssArray.some((num) => num !== "0")) {
      return this.numToText(parseInt(billionsArray.join(""))) + " billion";
    } else {
      return (
        this.numToText(parseInt(billionsArray.join(""))) +
        " billion " +
        this.millions(parseInt(millionssArray.join("")))
      );
    }
  }
}

const test5 = new ConvertNum();


class ConvertStringToNum extends Functions3 {
  inputString: string;
  constructor() {
    super();
    console.log("string 967,873",this.thousands("Nine hundred and sixty-seven thousand Eight hundred and seventy-three"))
    console.log("string 100,000",this.thousands("One hundred thousand"))
    console.log("string 1,000,000",this.millions("One million"))
    console.log("string 12,345,678",this.millions("Twelve million Three hundred and fourty-five thousand Six hundred and seventy-eight"))
    console.log("string 1,000,000,000",this.billions("One billion"))
    console.log("string 986,045,678,901",this.billions("Nine hundred and eightty-six billion Fourty-five million Six hundred and seventy-eight thousand Nine hundred and one"))
    console.log("string 986,045,678,901",this.billions("Nine hundred and eightty-six billion Fourty-five million Six hundred and seventy-eight thousand Nine hundred and eleven"))

  }
  thousands(inputString: string): number {
    let stringArray = inputString.toLowerCase().split(" thousand ");
    if(stringArray.length < 2 ) {
      return this.textToNum(stringArray[0])*1000;
    }
    return this.textToNum(stringArray[0])*1000 + this.textToNum(stringArray[1]);
  }
  millions(inputString: string): number {
    let stringArray = inputString.toLowerCase().split(" million ");
    if(stringArray.length < 2 ) {
      return this.textToNum(stringArray[0])*1000000;
    }
    return this.textToNum(stringArray[0])*1000000 + this.thousands(stringArray[1]);
  }
  billions(inputString: string): number {
    let stringArray = inputString.toLowerCase().split(" billion ");
    if(stringArray.length < 2 ) {
      return this.textToNum(stringArray[0])*1000000000;
    }
    return this.textToNum(stringArray[0])*1000000000 + this.millions(stringArray[1]);
  }
}

const test6 = new ConvertStringToNum();