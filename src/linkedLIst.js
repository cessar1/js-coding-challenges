class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // como obtengo el resto en javascript?

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  getList() {
    return this.head;
  }

  print() {
    let current = this.head;
    let result = "List : ";

    while (current !== null) {
      result += `${current.value} -> `;
      current = current.next;
    }
    result += " null";
    console.log(result);
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new Node(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const value1 = l1 ? l1.value : 0;
    const value2 = l2 ? l2.value : 0;

    let sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);

    const newNode = new Node(sum % 10);
    current.next = newNode;
    current = current.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }
  return dummyHead.next;
}

function printList(head) {
  let current = head;
  let result = "List : ";

  while (current !== null) {
    result += `${current.value} -> `;
    current = current.next;
  }
  result += " null";
  console.log(result);
}

const list1 = new LinkedList();
list1.add(2);
list1.add(4);
list1.add(7);

const list2 = new LinkedList();
list2.add(5);
list2.add(6);
list2.add(4);

const result = addTwoNumbers(list1.head, list2.head);
// console.log(result);
printList(result);
