class Node {
  element = null;
  next = null;
  constructor (element) {
    this.element = element;
  }
}
export default class List {
  head = new Node('head');
  constructor(args) {
    this.insert(args, 'head');
  }
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  findPrev(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  insert(element, item = 'head') {
    const currNode = this.find(item);
    const newNode = new Node(element);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }
  remove(item) {
    const prevNode = this.findPrev(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}
