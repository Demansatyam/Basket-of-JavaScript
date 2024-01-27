function findMaxNumber(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
}

const numbers = [5, 3, 9, 2, 7, 1];
const result = findMaxNumber(numbers);
console.log("The maximum number is:", result);

