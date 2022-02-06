// https://leetcode.com/problems/maximum-subarray/
// Maximum subarray (Kadane's algorithm approach)

export function maxSubArray(nums: number[]) {
  let globalMax = Number.NEGATIVE_INFINITY;
  let localMax = Number.NEGATIVE_INFINITY;

  for (let i = 0, l = nums.length; i < l; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);

    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
