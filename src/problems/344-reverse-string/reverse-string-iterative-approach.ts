// https://leetcode.com/problems/reverse-string
// Reverse string (iterative approach)

export function reverseString(s: string[]): void {
  for (let i = 0, l = Math.floor(s.length / 2); i < l; i++) {
    const current = s[i];
    const backIndex = s.length - i - 1;

    s[i] = s[backIndex];
    s[backIndex] = current;
  }
}
