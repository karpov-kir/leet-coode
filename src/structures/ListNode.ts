// Singly-linked list
export class ListNode {
  public val: number;
  public next: ListNode | null;

  public static fromArray(array: number[]): ListNode {
    if (array.length === 0) {
      throw new Error('Array must contain at least 1 element');
    }

    const start = new ListNode(array[0]);
    let current = start;

    array.shift();
    array.forEach((number) => {
      current.next = new ListNode(number);
      current = current.next;
    });

    return start;
  }

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  public clone(): ListNode {
    return new ListNode(this.val, this.next ? this.next.clone() : null);
  }

  public toArray(): number[] {
    const array: number[] = [this.val];
    let currentListNode: ListNode | null = this.next;

    while (currentListNode) {
      array.push(currentListNode.val);
      currentListNode = currentListNode.next;
    }

    return array;
  }

  public toString() {
    return this.toArray().join('->');
  }
}
