// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  else if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  else return isPalindrome(str.substring(1, str.length - 1));
};

console.log(isPalindrome('amanaplanacanalpandemonium'));
