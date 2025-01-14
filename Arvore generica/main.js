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
