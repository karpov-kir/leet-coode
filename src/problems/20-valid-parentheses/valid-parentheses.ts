// https://leetcode.com/problems/valid-parentheses/
// Valid parentheses

export function isValid(s: string): boolean {
  // const bracketsMap = new Map([
  //     ['{', '}'],
  //     ['[', ']'],
  //     ['(', ')']
  // ]);
  const bracketsMap: { [key: string]: string | undefined } = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const awaitedClosingBrackets: string[] = [];

  for (const currentBracket of s) {
    // const closingBracket = bracketsMap.get(bracket);
    const closingBracket = bracketsMap[currentBracket];

    // If there is a closing bracket initialised
    // then the current bracket is an opening one
    if (closingBracket) {
      // console.log('Add to opened', currentBracket);

      awaitedClosingBrackets.push(closingBracket);
    } else {
      // console.log('Process as closing', currentBracket);

      const awaitedClosingBracket = awaitedClosingBrackets.pop();

      if (currentBracket !== awaitedClosingBracket) {
        // console.log(
        //     `Closing bracket must be the same type as previous opened bracket`,
        //     currentBracket,
        //     'awaited closing bracket:',
        //     awaitedClosingBracket
        // );

        return false;
      }
    }
  }

  // console.log('Left opened in stack', openedBracketsStack);

  return awaitedClosingBrackets.length === 0;
}
