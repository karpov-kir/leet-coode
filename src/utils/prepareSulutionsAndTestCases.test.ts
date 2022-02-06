import { ListNode } from '../structures';
import { prepareSolutionsAndTestCases } from './prepareSolutionsAndTestCases';

describe(prepareSolutionsAndTestCases, () => {
  it('should add the human-readable test case field', () => {
    const arrayWithListNodes = [ListNode.fromArray([1, 2, 4]), ListNode.fromArray([1, 3, 4])];
    const listNode = new ListNode(1, new ListNode(2));
    const arrayOfArrays = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const solutions = [
      {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        solution: () => {},
        name: 'Test',
      },
    ];
    const testCasesAndExpectedResults = [
      {
        testCase: arrayWithListNodes,
        expectedResult: undefined,
      },
      {
        testCase: listNode,
        expectedResult: undefined,
      },
      {
        testCase: arrayOfArrays,
        expectedResult: undefined,
      },
      {
        testCase: null,
        expectedResult: undefined,
      },
      {
        testCase: undefined,
        expectedResult: undefined,
      },
    ];

    expect(prepareSolutionsAndTestCases(solutions, testCasesAndExpectedResults)).toEqual({
      solutions: [
        {
          solution: expect.any(Function),
          name: 'Test',
        },
      ],
      testCasesAndExpectedResults: [
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: '[1->2->4,1->3->4]',
          expectedResult: undefined,
        },
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: '1->2',
          expectedResult: undefined,
        },
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: '[[1,2,3],[4,5,6]]',
          expectedResult: undefined,
        },
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: 'null',
          expectedResult: undefined,
        },
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: 'undefined',
          expectedResult: undefined,
        },
      ],
    });
  });

  it('should add the human-readable test case field as array per configuration', () => {
    const testCase = { a: [1, [2, 3]], b: new ListNode(1, new ListNode(2)) };
    const solutions = [
      {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        solution: () => {},
        name: 'Test',
      },
    ];
    const testCasesAndExpectedResults = [
      {
        testCase,
        expectedResult: undefined,
      },
    ];

    expect(
      prepareSolutionsAndTestCases(solutions, testCasesAndExpectedResults, {
        testCaseAsArguments: true,
      }),
    ).toEqual({
      solutions: [
        {
          solution: expect.any(Function),
          name: 'Test',
        },
      ],
      testCasesAndExpectedResults: [
        {
          getTestCase: expect.any(Function),
          humanReadableTestCase: { a: '[1,[2,3]]', b: '1->2' },
          expectedResult: undefined,
        },
      ],
    });
  });

  it('should throw an error if the human-readable test case field is expected to be an object but the test case field is not an object', () => {
    const solutions = [
      {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        solution: () => {},
        name: 'Test',
      },
    ];
    const testCasesAndExpectedResults = [
      {
        testCase: {},
        expectedResult: undefined,
      },
      {
        testCase: '',
        expectedResult: undefined,
      },
    ];

    expect(() =>
      prepareSolutionsAndTestCases(solutions, testCasesAndExpectedResults, {
        testCaseAsArguments: true,
      }),
    ).toThrow(new Error('Test case at position 1 must be an array'));
  });

  it('should always return a new copy of each test case', () => {
    const testCase1 = [[1, [2, 3]], new ListNode(1, new ListNode(2))];
    const testCase2 = {
      test: 'test-case-2',
    };
    const {
      testCasesAndExpectedResults: [{ getTestCase: getPreparedTestCase1 }],
    } = prepareSolutionsAndTestCases(
      [
        {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          solution: () => {},
          name: 'Test',
        },
      ],
      [
        {
          testCase: testCase1,
          expectedResult: undefined,
        },
      ],
    );
    const {
      testCasesAndExpectedResults: [{ getTestCase: getPreparedTestCase2 }],
    } = prepareSolutionsAndTestCases(
      [
        {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          solution: () => {},
          name: 'Test',
        },
      ],
      [
        {
          testCase: testCase2,
          expectedResult: undefined,
        },
      ],
    );

    const preparedTestCase1 = getPreparedTestCase1();
    const preparedTestCase2 = getPreparedTestCase2();

    preparedTestCase1[0] = [100];
    preparedTestCase2.test = 'test-case-2-modified';

    // Make sure tests cases have been unlinked
    expect(preparedTestCase1).not.toEqual(testCase1);
    expect(preparedTestCase2).not.toEqual(testCase2);
  });
});
