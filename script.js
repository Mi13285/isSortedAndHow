function isSortedAndHow(array) {
  return array.every((x, i) => i == 0 || array[i] >= array[i - 1])
    ? "yes, ascending"
    : array.every((x, i) => i == 0 || array[i] <= array[i - 1])
    ? "yes, descending"
    : "no";
}
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
