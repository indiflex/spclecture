console.log('This is a.js!');

function tf() {
  console.table(Array.from({ length: 50 }, (_, i) => i + 1));
  for (let i = 0; i < 50; i++) {
    console.log(i ** 2);
  }
}
