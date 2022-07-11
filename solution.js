const int1 = 41;
const int2 = 91;
const int3 = -1489;

if (int1 >= 50 && int1 <= 99 && int2 >= 50 && int2 <= 99) {
  console.log("Both are true");
} else if (int1 >= 50 && int1 <= 99 && int2 < 50 && int2 > 99) {
  console.log("The first one is true and the second one is false");
} else if (int1 < 50 && int1 > 99 && int2 < 50 && int1 > 99) {
  console.log("Both are false");
} else {
  console.log("The first one is false and the second one is true");
}

// if (int2 >= 50 && int1 <= 99) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// EXERCISE 2

/**
 *  let int1 = 51;
    let int2 = 84;
    let int3 = 1489;
 */

console.log("-----------------Exercise 2");

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("There is one true");
}
//   int1 < 50 && int1 > 99 && int2 < 50 && int2 > 99 && int3 < 50 && int3 > 99;
else console.log("All are false");

//     EXERCISE 3

console.log("EXERCISE 3-----------------");
const a = 33;
const b = -456;
const c = 122;

if (a > b && a > c) {
  console.log(a, "is the largest number");
} else if (b > a && b > c) {
  console.log(b, "is the largest number");
} else {
  console.log(c, "is the largest number");
}

if (int1 > int2 && int1 > int3) {
  console.log(int1, "is the largest number");
} else if (int2 > int1 && int2 > int3) {
  console.log(int2, "is the largest number");
} else {
  console.log(int3, "is the largest number");
}

//             EXERCISE 4
console.log("------------------------EXERCISE 4");

const str = "thon";

if (str.includes("Py")) {
  console.log(str);
} else {
  console.log("Py" + str + "Py");
}

// EXERCISE 5
console.log("EXERCISE 5 --------------------");

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log("65");
} else console.log("80");

//EXERCISE 6
console.log("------------------------EXERCISE 6");

const int4 = 1;
const int5 = 14;

if (int4 + int5 === 8 || int4 - int5 === 8) {
  console.log("true");
} else console.log("false");

// EXERCISE 7
console.log("EXERCISE 7------------------");

if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log("true");
} else console.log("false");

//EXERCISE 8
console.log("-----------------EXERCISE 8");

if (int4 % 7 === 0 || int4 % 11 === 0 || (int5 % 7 === 0 && int5 % 11 === 0)) {
  console.log("true");
} else console.log("false");

//EXERCISE 9
console.log("EXERCISE 9-----------------------------");

if (int4 === int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

// EXERCISE 10
console.log("---------------EXERCISE 10");

if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(int5 - 19);
}
