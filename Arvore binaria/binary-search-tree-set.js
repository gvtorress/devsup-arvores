export default class BinarySearchTree {
  #size;
  #root;

  constructor() {
    this.#size = 0;
    this.#root = new Node(null, null);
  }

  size = () => {
    return this.#size;
  }

  isEmpty = () => {
    return this.#size === 0;
  }

  add = (key) => {
    if (key === null) {
      throw new Error("Key cannot be null");
    }

    if (this.isEmpty()) {
      this.#root = new Node(key, null);
      this.#root.left = new Node(null, this.#root);
      this.#root.right = new Node(null, this.#root);
      this.#size++;
      return;
    }
  }
}

class Node {
  constructor(key, parent) {
    this.key = key;
    this.left = this.right = null;
    this.parent = parent;
  }


}