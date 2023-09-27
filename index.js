function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length/2; i++) {
    const j = word.length -  1 - i
    if (word[i] !== word[j]) {
    return false
    }
  }
  return true
}
// better to code as follows for more readable and cleaner:
// function isPalindrome(word) {
//   for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
//     const endIndex = word.length - 1 - startIndex;
//     if (word[startIndex] !== word[endIndex]) {
//       return false;
//     }
//   }
//   return true;
// }

/* 
  Add your pseudocode here
//write a function with one argument, a string, that will return true if the word string is a P, and return false if is not.  What if I write an if statement that says if the first and last words in the string are equal, and so on, then return true, and if they are not the same, return false. 
 
*/

/*
  Add written explanation of your solution here
  we just itererated from beginning to middle to check each letter to the corresponding letter from the end.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
