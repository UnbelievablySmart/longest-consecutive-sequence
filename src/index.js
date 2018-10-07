module.exports = function longestConsecutiveLength(array) {
  //we need to sort array so that its elements are arranged in ascending order
  array.sort((a, b) => a - b);

  let count = 1;
  let temporaryElement = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] == array[i]) {
      continue;
    } else if (array[i + 1] == array[i] + 1) {
      temporaryElement++;
    } else {
      while (temporaryElement > 1) {
        if (count < temporaryElement) {
          count = temporaryElement;
        }
        temporaryElement = 1;
      }
    }
  }

  if (array.length == 0) return 0;

  return count;
}
