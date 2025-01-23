import { BinarySearchTreeSet } from "./binary-search-tree-set.js"

// const A = new BinarySearchTreeSet([52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]);
const A = new BinarySearchTreeSet([1, 2, 3, 4, 5]);
const B = new BinarySearchTreeSet([4, 5, 6, 7, 8]);

// console.log(`size = ${A.size()}`);
// console.log(`isEmpty = ${A.isEmpty()}`);

// console.log(`Keys: ${A.keys()}`);
// console.log(`A contains 83? ${A.contains(83)}`);
// console.log(`A contains 84? ${A.contains(84)}`);

// console.log(A.toString());
// console.log(A.toStringFormat());

console.log(`\nA: ${A}`);
console.log(`\nB: ${B}`);

const C = A.union(B);
console.log("\nUnion:");
console.log(`${C}`);

const D = A.intersection(B);
console.log("\nIntersection:");
console.log(`${D}`);

const E = A.difference(B);
console.log("\nDifference:");
console.log(`${E}`);
