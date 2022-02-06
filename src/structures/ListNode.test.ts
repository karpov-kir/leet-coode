import { ListNode } from './ListNode';

describe(ListNode, () => {
  it('should clone a list node', () => {
    const listNode = new ListNode(1, new ListNode(2));
    const listNodeClone = listNode.clone();

    listNodeClone.next!.val = 3;

    // Verify that the instances have been unlinked
    expect(listNode.next?.val).toBe(2);
    expect(listNodeClone.next?.val).toBe(3);
  });

  it('should convert a list node to an array', () => {
    expect(new ListNode(1, new ListNode(3, new ListNode(2))).toArray()).toEqual([1, 3, 2]);
  });

  it('should convert a list node to a string', () => {
    expect(new ListNode(1, new ListNode(3, new ListNode(2))).toString()).toEqual('1->3->2');
  });

  it('should convert an array to a node list', () => {
    expect(ListNode.fromArray([2, 5, 7])).toEqual(new ListNode(2, new ListNode(5, new ListNode(7))));
  });

  it('should throw an error if the array to convert is empty', () => {
    expect(() => ListNode.fromArray([])).toThrow(new Error('Array must contain at least 1 element'));
  });

  it('should return a single node list if the array to convert has only 1 element', () => {
    expect(ListNode.fromArray([1])).toEqual(new ListNode(1));
  });
});
