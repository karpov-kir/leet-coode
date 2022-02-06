import { TreeNode } from './TreeNode';

describe(TreeNode, () => {
  it('should clone a tree node', () => {
    const treeNode = new TreeNode(10, new TreeNode(5), new TreeNode(15));
    const treeNodeClone = treeNode.clone();

    treeNodeClone.left!.val = 7;
    treeNodeClone.right!.val = 12;

    // Verify that the instances have been unlinked
    expect(treeNode.left?.val).toBe(5);
    expect(treeNode.right?.val).toBe(15);
    expect(treeNodeClone.left?.val).toBe(7);
    expect(treeNodeClone.right?.val).toBe(12);
  });

  it('should convert a tree node to an object', () => {
    expect(new TreeNode(20, new TreeNode(15, new TreeNode(10)), new TreeNode(25, new TreeNode(23))).toObject()).toEqual(
      {
        val: 20,
        left: {
          val: 15,
          left: {
            val: 10,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 25,
          left: {
            val: 23,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    );
  });

  it('should convert a tree node to a string', () => {
    expect(
      TreeNode.fromObject({
        val: 20,
        left: {
          val: 10,
          left: {
            val: 5,
            left: {
              val: 1,
            },
            right: {
              val: 7,
            },
          },
        },
        right: {
          val: 30,
          left: {
            val: 25,
            left: {
              val: 22,
            },
          },
        },
      }).toString('*'),
    ).toEqual('\n*root:20\n*left:10\n*--left:5\n*----left:1\n*----right:7\n*right:30\n*--left:25\n*----left:22\n');
  });
});
