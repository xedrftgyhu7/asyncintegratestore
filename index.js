function findTheDifference(s, t) {
  let result = 0;
  for (const char of s) {
    result ^= char.charCodeAt(0);
  }
  for (const char of t) {
    result ^= char.charCodeAt(0);
  }
  return String.fromCharCode(result);
}
