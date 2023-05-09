///1
function arrayMinNum(array: number[]): number {
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return array[0];
}
console.log("array min", arrayMinNum([5, 9, 44, 23, 53, 8]));
console.log("array min", arrayMinNum([-30, 0, -2, 10, 15]));
console.log("array min", arrayMinNum([40, 1, 5]));

///2
function arrayMaxNum(array: number[]): number {
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return array[array.length - 1];
}
console.log("array max", arrayMaxNum([5, 9, 44, 23, 53, 8]));
console.log("array max", arrayMaxNum([-30, 0, -2, 10, 15]));
console.log("array max", arrayMaxNum([40, 1, 5]));

///3
function indexOfMin(array: number[]): number {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  return array.indexOf(sortedArray[0], 0);
}
console.log("index of min", indexOfMin([40, 1, 5]));
console.log("index of min", indexOfMin([30, 0, -2, 10, 15]));

///4
function indexOfMax(array: number[]): number {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return array.indexOf(sortedArray[sortedArray.length - 1], 0);
}
console.log("index of max", indexOfMax([40, 1, 50, 33]));
console.log("index of max", indexOfMax([-30, 0, -2, 10, 15]));
///5
function sumNegative(array: number[]): number {
  let sum: number = array.reduce((a, b) => {
    if(array.indexOf(b, 0) % 2 === 0) {
      return a + b
    } else {
      return a
    }
  })
  return sum
}
console.log("sumNegative", sumNegative([2, 5, 7, 9, 3, 9, 4]))
console.log("sumNegative", sumNegative([1, 2, 1, 2, 1, 2]))

///6
function reverseArray(array: number[]): number[] {
  return array.reverse()
}
console.log("reverseArray", reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

///7
function countOddElements(array: number[]): number {
  return array.reduce((a, b) => {
    if(b % 2 !== 0){
      return a + 1
    } else {
      return a 
    }
  }, 0)
}

console.log("countOddElements" , countOddElements([3,2,2,2,2,2,2,2,2,3,3,2,2,2]))
console.log("countOddElements" , countOddElements([1,2,2,2,2,1,1,2,1,2]))

///8
function switchHalfs(array: number[]): number[] {
  let array2 = array.splice(0, (array.length)/2)
  return array.concat(array2)
}

console.log("teswitchHalfsst", switchHalfs([1,2,3,4]))
console.log("switchHalfs", switchHalfs([1,2,3,4,5,6]))

///9
function sortArray(array: number[]): number[] {
  
}