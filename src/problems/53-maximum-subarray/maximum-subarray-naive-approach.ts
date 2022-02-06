// https://leetcode.com/problems/maximum-subarray/
// Maximum subarray (naive approach)

export function maxSubArray(nums: number[]): number {
  let maxSum = Number.NEGATIVE_INFINITY;
  // let iterations = 0;

  for (let i = 0, l = nums.length; i < l; i++) {
    let sum = 0;
    const leftAhead = nums.length - i;

    // console.log('Outer', i, nums[i]);

    for (let j = 0; j < leftAhead; j++) {
      // console.log('Inner', j, nums[j + i + 1]);

      // iterations++;
      sum += nums[j + i];
      maxSum = Math.max(sum, maxSum);
    }
  }

  // Gives 45 for [-2,1,-3,4,-1,2,1,-5,4] input
  // console.log('Iterations:', iterations);

  return maxSum;
}
