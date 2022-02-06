// https://leetcode.com/problems/reverse-string
// Reverse string (recursive approach)

export function reverseString(s: string[]): void {
  function helper(startIndex: number, endIndex: number) {
    if (startIndex > endIndex) {
      return;
    }

    const tmp = s[startIndex];
    s[startIndex] = s[endIndex];
    s[endIndex] = tmp;

    helper(startIndex + 1, endIndex - 1);
  }

  helper(0, s.length - 1);
}
