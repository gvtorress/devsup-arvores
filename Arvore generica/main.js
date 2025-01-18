import GenericTree from "./generic-tree.js";

const myTree = new GenericTree();

const root = myTree.add("Livro Azul", null);

const intro = myTree.add("Introducao", root);
const cap1 = myTree.add("Capitulo 1", root);
const cap2 = myTree.add("Capitulo 2", root);

myTree.add("Para quem e este livro", intro);
myTree.add("Agradecimentos", intro);

myTree.add("Conceitos", cap1);
myTree.add("Aplicacoes", cap1);

const metodos = myTree.add("Metodos", cap2);
myTree.add("Problema terreno", cap2);
myTree.add("Problema carros", cap2);

myTree.add("Metodo Recursivo", metodos);
myTree.add("Metodo Imperativo", metodos);

console.log(`size: ${myTree.size()}`);
console.log(`isEmpty: ${myTree.isEmpty()}`);

const pos1 = myTree.find("Livro Azul");
const pos2 = myTree.find("Capitulo 1");
const pos3 = myTree.find("Aplicacoes");

console.log("\nLivro Azul: ");
if (pos1) {
  console.log("Encontrado");
  console.log(`isExternal: ${myTree.isExternal(pos1)}`);
  console.log(`isRoot: ${myTree.isRoot(pos1)}`);
  const parent = myTree.parent(pos1);
  if (parent) console.log(`parent: ${parent.element()}`);
} else {
  console.log("Não encontrado");
}

console.log("\nCapítulo 1: ");
if (pos2) {
  console.log("Encontrado");
  console.log(`isExternal: ${myTree.isExternal(pos2)}`);
  console.log(`isRoot: ${myTree.isRoot(pos2)}`);
  const parent = myTree.parent(pos2);
  if (parent) console.log(`parent: ${parent.element()}`);
} else {
  console.log("Não encontrado");
}

console.log("\nAplicações: ");
if (pos3) {
  console.log("Encontrado");
  console.log(`isExternal: ${myTree.isExternal(pos3)}`);
  console.log(`isRoot: ${myTree.isRoot(pos3)}`);
  const parent = myTree.parent(pos3);
  if (parent) console.log(`parent: ${parent.element()}`);
} else {
  console.log("Não encontrado");
}

const pos4 = myTree.find("Conceitos");
myTree.replace(pos4, "Conceitos Basicos");

console.log("\nelements():");
for (const elem of myTree.elements()) {
  console.log(elem);
}

console.log("\npositions():");
for (const pos of myTree.positions()) {
  console.log(pos);
}

const pos5 = myTree.find("Metodos");
if (pos5) {
  myTree.remove(pos5);
  console.log("\nPrint dfs pre order:");
  print(myTree);
}

function print(tree) {
  printRecursive(tree.root(), tree, 0);
}

function printRecursive(position, tree, depth) {
  console.log(`${'\t'.repeat(depth)}${position.element()}`);
  for (const child of tree.children(position)) {
    printRecursive(child, tree, depth + 1);
  }
}

print(myTree);
