function makeArray(n) {
  if (n === 1) return [1];
  return [n, ...makeArray(n - 1)];
  // return [...makeArray(n - 1), n];
}

console.log(makeArray(5));
