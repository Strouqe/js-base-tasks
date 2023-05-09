///1
function sumEven(): number {
  let sum = 0;
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumEven());

///2
function isPrimeNum(num: number): boolean {
  if (1 <= num && num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("7", isPrimeNum(7));
console.log("3", isPrimeNum(3));
console.log("4", isPrimeNum(4));
console.log("13", isPrimeNum(13));
console.log("1.5", isPrimeNum(1.5));

///3

function sqrRoot(num: number): number {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      result = i;
    }
  }
  return result;
}

console.log("sqr root",sqrRoot(9));
console.log("sqr root",sqrRoot(4));
console.log("sqr root",sqrRoot(144));
///add binary search

///4
function factorial(num: number): number {
  let ans = 1
  for(let i=1; i <= num; i++) {
    ans = ans*i
  }
  return ans
}

console.log("factorial", factorial(10))
console.log("factorial", factorial(4))
console.log("factorial", factorial(3))
console.log("factorial", factorial(2))

///5
function sumDig(num: number): number {
  let array = num.toString().split("")
  let ans = 0
  for(let i=0; i < array.length; i++){
    ans = ans + parseInt(array[i]);
  }
  return ans
}

console.log("sumDig", sumDig(1111))
console.log("sumDig", sumDig(235))
console.log("sumDig", sumDig(64))
console.log("sumDig", sumDig(12345))

///6
function reverseNum(num: number): number {
  let array = num.toString().split("");
  let reverseArray: string[] = []
  let ans = 0

  for(let i=array.length - 1; i >= 0; i--){
    reverseArray.push(array[i])
  }
  

  return parseInt(reverseArray.join(''))
}


console.log("reverseNum", reverseNum(1234))
console.log("reverseNum", reverseNum(98765))
