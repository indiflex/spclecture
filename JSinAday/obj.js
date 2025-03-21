const assert = require('assert');

const user = {
  '': 1,
  ' ': 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  123n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: 'Hong', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  'my-friends': ['Han', 'Kim'],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};
console.log('🚀 user:', user);

console.log((123).toString(), 123n.toString());
console.log('--------------------------');
const a = {};
const b = { k: 1 };
// const c = { k: 2 };
const c = [2, 3];
a[b] = 77;
a[c] = 99;
console.log(a[b]); // ?

console.log(b.toString(), c.toString());
console.log('--------------------------');
console.log(Object.keys(user), Object.values(user));
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);
delete user.name;
user.name = 'xxxxxxxx';
console.log(Object.entries(user));
console.log('--------------------------');
// const userJsonStr = JSON.stringify(user);
const userJsonStr =
  '{ "123":2, "":1, " ":1, "true":1, "id":2, "Fri Mar 21 2025 10:41:40 GMT+0900 (대한민국 표준시)":365, "my-friends": ["Han", "Kim"]}';
console.log('🚀 userJsonStr:', userJsonStr);
const userJson = JSON.parse(userJsonStr);

console.log('🚀 userJson:', userJson);

console.log('--------------------------');
const value = JSON.rawJSON('"[123, 456]"');
console.log('🚀 value:', JSON.isRawJSON(value));
assert.strictEqual(JSON.isRawJSON(value), false);

console.log(JSON.stringify({ value: value }));
