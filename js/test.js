let array = [
  "Mickey Mouse",
  "Hello Kitty",
  "Snow white",
  "Mickey Mouse",
  "Hello Kitty",
  "Hello Kitty",
  "Barbie doll",
  "Snow white",
];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pickIt(arr) {
  let odd = [];
  let even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
// console.log(pickIt(arr2));

function equal5(a, b) {
  return a % b;
}
// console.log(equal5(250, 150));
// console.log(equal5(100, 200));

function grabDoll(dolls) {
  let bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
    bag.push(dolls[i]);
    if (bag.length === 3) break;
  }
  return bag;
}
console.log(grabDoll(array));

function giveMeFive(obj) {
  let five = [];
  for (key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}
// console.log(giveMeFive({ Our: "earth", is: "a", beautiful: "world" }), [
//   "earth",
//   "world",
// ]);

function whatNumberIsIt(n) {
  //coding here
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  }
  if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  }
  if (isNaN(n)) {
    return "Input number is Number.NaN";
  }
  if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  }
  if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
  return `Input number is ${n}`;
}
// console.log(whatNumberIsIt(1 / 0), "Input number is Number.POSITIVE_INFINITY");
// console.log(whatNumberIsIt(100));
// console.log(
//   whatNumberIsIt(1.7976931348623157e308),
//   "Input number is Number.MAX_VALUE"
// );

const toHex = (c) => {
  let hex = c.toString(16);
  console.log(hex);
  return hex.length == 1 ? `0${hex}` : hex;
};
function colorOf(r, g, b) {
  //coding here
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
// console.log(colorOf(255, 0, 0));

const howManySmaller2 = (arr, n) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) {
      res++;
    }
  }
  return res;
};
console.log(howManySmaller2([1.234, 1.235, 1.228], 1.24));
