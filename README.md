# JavaScript Practice Repository

Welcome to my JavaScript Practice Repository! 🚀 Here, I'll be sharing various practice questions and documenting my learning journey in JavaScript.

## Purpose

The main goal of this repository is to enhance my understanding of JavaScript through practical exercises. By solving a variety of coding challenges, I aim to improve my problem-solving skills and gain a deeper insight into the language.

## Contents

The repository is organized into different sections, each containing practice questions related to specific JavaScript concepts. Feel free to explore the folders and attempt the challenges at your own pace.

Ques1: Find the largest number from the array.
Answer:
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

![Screenshot 2024-01-27 204232](https://github.com/Demansatyam/Basket-of-JavaScript/assets/90399155/7e27d968-5c7a-4ab4-96c8-dcab52d8a4c5)
