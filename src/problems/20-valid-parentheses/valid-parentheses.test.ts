import { prepareSolutionsAndTestCases } from '../../utils';
import { isValid } from './valid-parentheses';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: isValid,
      name: 'Valid parentheses',
    },
  ],
  [
    {
      testCase: '()',
      expectedResult: true,
    },
    {
      testCase: '()[]{}',
      expectedResult: true,
    },
    {
      testCase: '(]',
      expectedResult: false,
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `should determine if '$testCase' contains a valid order of the brackets`,
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
