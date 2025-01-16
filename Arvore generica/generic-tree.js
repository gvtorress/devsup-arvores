import Node from "./node.js";

export default class GenericTree {
  #root;
  #size;

  constructor() {
    this.#root = null;
    this.#size = 0;
  }

  size = () => {
    return this.#size;
  }

  isEmpty = () => {
    return this.#size === 0;
  }

  elements = () => {
    const list = [];
    this.#collectElements(list, this.#root);
    return list;
  }

  #collectElements = (list, node) => {
    list.push(node.element());
    for (const child of node._getChildren()) {
      this.#collectElements(list, child);
    }
  }

  positions = () => {
    const list = [];
    this.#collectPositions(list, this.#root);
    return list;
  }

  #collectPositions = (list, node) => {
    for (const child of node._getChildren()) {
      this.#collectPositions(list, child);
    }
  }

  #validate = (position) => {
    if (!(position instanceof Node)) throw new Error("Invalid position type");
    if (position._getParent() === position) throw new Error("Removed node");
    return position;
  }

  add = (element, parent) => {
    if (!this.isEmpty() && !parent) throw new Error("Parent position invalid");
    
    const parentNode = parent ? this.#validate(parent) : null;
    
    const newNode = new Node(element, parentNode);
    if (!parentNode) {
      this.#root = newNode;
    } else {
      parentNode._addChild(newNode);
    }
    this.#size++;
    return newNode;
  }

  children = (position) => {
    const node = this.#validate(position);
    return [...node._getChildren()];
  }

  root = () => {
    return this.#root;
  }
}