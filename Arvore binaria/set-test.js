import { BinarySearchTreeSet } from "./binary-search-tree-set.js"

const A = new BinarySearchTreeSet([52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]);

console.log(`size = ${A.size()}`);
console.log(`isEmpty = ${A.isEmpty()}`);

console.log(`Keys: ${A.keys()}`);
console.log(`A contains 83? ${A.contains(83)}`);
console.log(`A contains 84? ${A.contains(84)}`);

console.log(A.toString());
console.log(A.toStringFormat());
