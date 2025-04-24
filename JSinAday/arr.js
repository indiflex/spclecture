const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const r1 = arr2.slice(1, 3);
console.log('🚀 r1:', r1);

// ex2) [3]부터 모두 다 추출
const r2 = arr2.slice(2);
console.log('🚀 r2:', r2);

// ex3) [2,3,4] 제거하기
const r3 = arr2.splice(1, 3);
console.log('🚀 r3:', r3, arr2);

// ex4) 복원하기
arr2.splice(1, 0, ...r3);
console.log('arr2>>', arr2);

console.log('------------------');
const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';

function promi() {
  fetch(sampleUrl)
    .then(res => res.json())
    .then(console.log);
}

async function async_await() {
  const res = await fetch(sampleUrl);
  const data = await res.json();
  console.log('🚀 data:', data);
}
async_await();
