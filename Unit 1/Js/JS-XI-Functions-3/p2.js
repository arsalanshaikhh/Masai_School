// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value

function sub(a, b) {
  return a - b;
}

console.log(sub(12, 4));
console.log(sub(4, 18));

function absSub(a, b) {
  return Math.abs(a - b);
}

console.log(absSub(12, 4));
console.log(absSub(4, 18));
