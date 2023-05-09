///1
function dayOfWeek(num) {
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
function numToText(num) {
    var numArray = num.toString().split("");
    var hundreds = "";
    var tens = "";
    var didgits = "";
    var dash = "";
    if (num === 0) {
        return "Zero";
    }
    else {
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
        }
        else {
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
    if (numArray[numArray.length - 1] !== "0" && numArray[numArray.length - 2] !== "0") {
        dash = numArray[numArray.length - 2] !== '1' ? "-" : "";
    }
    if (numArray.length === 3) {
        if (numArray[1] === "0" && numArray[2] === "0") {
            return hundreds;
        }
        return hundreds + " and " + tens.toLocaleLowerCase() + dash + didgits.toLocaleLowerCase();
    }
    else if (numArray.length === 2) {
        return tens + dash + didgits.toLocaleLowerCase();
    }
    else if (numArray.length === 1) {
        return didgits;
    }
    else {
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
