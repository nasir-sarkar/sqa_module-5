function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log("Is 'racecar' a palindrome? " + isPalindrome("racecar"));




