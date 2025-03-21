function makeArray(n) {
  if (n === 1) return [1];
  return [n, ...makeArray(n - 1)];
  // return [...makeArray(n - 1), n];
}

console.log(makeArray(5));
console.log(makeArrayTCO(5));

function makeArrayTCO(n, acc = []) {
  if (n === 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]);
}
