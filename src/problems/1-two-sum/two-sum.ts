// https://leetcode.com/problems/two-sum/
// Two sum

export function twoSum(nums: number[], target: number): number[] {
  let aIndex;
  let bIndex;

  loop1: for (let numIndex = nums.length - 1; numIndex >= 0; numIndex--) {
    // iterations++;

    const num = nums[numIndex];

    loop2: for (let innerNumIndex = numIndex - 1; innerNumIndex >= 0; innerNumIndex--) {
      const innerNum = nums[innerNumIndex];

      if (innerNum + num === target) {
        aIndex = numIndex;
        bIndex = innerNumIndex;
        break loop1;
      }
    }

    nums.pop();
  }

  return [bIndex as number, aIndex as number];
}
