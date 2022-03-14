type BinaryTreeObject = {
  left?: BinaryTreeObject | null;
  right?: BinaryTreeObject | null;
  val: number;
};

// Binary tree node
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  public static fromObject(binaryTreeObject: BinaryTreeObject): TreeNode {
    return new TreeNode(
      binaryTreeObject.val,
      binaryTreeObject.left ? TreeNode.fromObject(binaryTreeObject.left) : null,
      binaryTreeObject.right ? TreeNode.fromObject(binaryTreeObject.right) : null,
    );
  }

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;

    if (left && left.val >= this.val) {
      throw new Error('Left value must be less then value in the current node');
    }

    if (right && right.val <= this.val) {
      throw new Error('Right value must be less then value in the current node');
    }

    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  public clone(): TreeNode {
    return new TreeNode(this.val, this.left ? this.left.clone() : null, this.right ? this.right.clone() : null);
  }

  public toObject(): BinaryTreeObject {
    return {
      val: this.val,
      left: this.left ? this.left.toObject() : null,
      right: this.right ? this.right.toObject() : null,
    };
  }

  public toString(defaultOffset = '\t', level = 0): string {
    const offset = [defaultOffset].concat(Array(level).fill('--')).join('');
    let result = '';
    const isRootLevel = level === 0;

    level++;

    if (isRootLevel) {
      result += `${defaultOffset}root:`;
    }

    result += this.val.toString();

    if (this.left) {
      result += `\n${offset}left:${this.left.toString(defaultOffset, level)}`;
    }

    if (this.right) {
      result += `\n${offset}right:${this.right.toString(defaultOffset, level)}`;
    }

    if (isRootLevel) {
      result = `\n${result}\n`;
    }

    return result;
  }
}
