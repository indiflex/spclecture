// 'use strict';
function add({ id, age }) {
  return id + age;
}

// const add = ({ id, age }) => id + age;

const user = {
  id: 1,
  name: 'Hong',
  age: 33,
  addr: { city: 'Seoul', road: '길' },
};
console.log('🚀 user:', Object.entries(user));

const {
  id,
  addr: { city },
} = user;

// const id = 1; const addr ={ city: 'Seoul', road: '길' }
// const   { city }   =   { city: 'Seoul', road: '길' }  -->  city = 'Seoul'

// const { id, age } = user;
// console.log('🚀 id:', id);
// console.log('🚀 age:', age);

// const id_age = add(id, age);
const id_age = add(user);
console.log('🚀 id_age:', id_age);
return;

const X = 1;
console.log('Hello, World!');

{
  const qq = 1;
}
var y;

f();
function f() {
  var z = 1;
  var q;
  console.log('xxx');
  if (z) {
    let l;
    console.log('zzz', l);
    l = 1;
  }
}

r = 1;

class A {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  // ...
}

const maxx = new A(1, 2);
console.log(maxx);
return;
