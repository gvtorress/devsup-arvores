export class BinarySearchTreeSet {
  #size;
  #root;

  constructor(collection = []) {
    this.#size = 0;
    this.#root = new Node(null, null);
    this.addAll(collection);
  }

  size = () => {
    return this.#size;
  }

  isEmpty = () => {
    return this.#size === 0;
  }

  addAll = (collection) => {
    collection.forEach((item) => this.add(item));
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

    let node = this.#findKeyLocation(this.#root, key);

    if (node.isSentinel()) {
      const parent = node.parent;
      const newNode = new Node(key, parent);
      newNode.left = new Node(null, newNode);
      newNode.right = new Node(null, newNode);

      if (node === parent.left) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }

      this.#size++;
    }
  }

  remove = (key) => {
    if (!key) throw new Error("Invalid key");

    let nodeToRemove = this.#findKeyLocation(this.#root, key);
    if (nodeToRemove.isSentinel()) return false;

    if (!nodeToRemove.left.isSentinel() && !nodeToRemove.right.isSentinel()) {
      const sucessor = this.#findMin(nodeToRemove.right);
      nodeToRemove.key = sucessor.key;
      nodeToRemove = sucessor;
    }

    let child = nodeToRemove.left.isSentinel() ? nodeToRemove.right : nodeToRemove.left;
    child.parent = nodeToRemove.parent;
    if (!nodeToRemove.parent) {
      this.#root = child;
    } else if (nodeToRemove === nodeToRemove.parent.left) {
      nodeToRemove.parent.left = child;
    } else {
      nodeToRemove.parent.right = child;
    }

    this.#size--;
    return true;
  }

  #findKeyLocation = (node, key) => {
    while (!node.isSentinel()) {
      if (key === node.key) return node;
      if (key < node.key) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    
    return node;
  }

  #findMin(node) {
    while (!node.left.isSentinel()) {
      node = node.left;
    }

    return node;
  }

  contains = (key) => {
    const node = this.#findKeyLocation(this.#root, key);
    return !node.isSentinel()
  }

  keys = () => {
    let keyList = [];
    this.#collectKeys(this.#root, keyList);
    return keyList;
  }

  #collectKeys = (node, keyList) => {
    if (!node.isSentinel()) {
      this.#collectKeys(node.left, keyList);
      keyList.push(node.key);
      this.#collectKeys(node.right, keyList)
    }
  }

  union = (otherTree) => {
    let result = new BinarySearchTreeSet();
    this.keys().forEach((key) => result.add(key));
    otherTree.keys().forEach((key) => result.add(key));
    return result;
  }

  intersection = (otherTree) => {
    let result = new BinarySearchTreeSet();
    this.keys().forEach((key) => {
      if (otherTree.contains(key)) result.add(key);
    });
    return result;
  }

  difference = (otherTree) => {
    let result = new BinarySearchTreeSet();
    this.keys().forEach((key) => {
      if (!otherTree.contains(key)) result.add(key);
    });
    return result;
  }

  toString = () => {
    return this.keys().toString();
  }

  toStringFormat = () => {
    let sb = [];
    this.#toStringFormatHelper(this.#root, 0, sb);
    return sb.join("");
  }

  #toStringFormatHelper = (node, depth, sb) => {
    if (!node.isSentinel()) {
      this.#toStringFormatHelper(node.right, depth + 1, sb);
      sb.push(`${"\t".repeat(depth)} ${node.key} ${"\n"}`);
      this.#toStringFormatHelper(node.left, depth + 1, sb);
    }
  }
}

class Node {
  constructor(key, parent) {
    this.key = key;
    this.left = this.right = null;
    this.parent = parent;
  }

  isSentinel = () => {
    return this.key === null;
  }
}