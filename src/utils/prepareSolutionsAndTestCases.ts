type Options = {
  // In some cases it's required to set test cases as a set of arguments for the solutions.
  // When this option is set to true, then `humanReadableTestCase` will contain an object of strings.
  // Each value in that object is the associated argument converted to a human-readable format.
  testCaseAsArguments: boolean;
};

// Add overloading to support conditional `humanReadableTestCase` return type
export function prepareSolutionsAndTestCases<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Solutions extends Array<{ name: string; solution: Function }>,
  TestCasesAndExpectedResults extends Array<{ testCase: unknown; expectedResult: unknown }>,
  O extends Options | undefined,
>(
  solutions: Solutions,
  testCasesAndExpectedResults: TestCasesAndExpectedResults,
  options?: O,
): {
  solutions: Solutions;
  testCasesAndExpectedResults: Array<{
    getTestCase: () => GetArrayElementType<TestCasesAndExpectedResults>['testCase'];
    expectedResult: GetArrayElementType<TestCasesAndExpectedResults>['expectedResult'];
    humanReadableTestCase: O extends { testCaseAsArguments: true } ? { [key: string]: string } : string;
  }>;
};

export function prepareSolutionsAndTestCases<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Solutions extends Array<{ name: string; solution: Function }>,
  TestCasesAndExpectedResults extends Array<{ testCase: unknown; expectedResult: unknown }>,
  O extends Options | undefined,
>(
  solutions: Solutions,
  testCasesAndExpectedResults: TestCasesAndExpectedResults,
  options?: O,
): {
  solutions: Solutions;
  testCasesAndExpectedResults: Array<{
    getTestCase: () => GetArrayElementType<TestCasesAndExpectedResults>['testCase'];
    expectedResult: GetArrayElementType<TestCasesAndExpectedResults>['expectedResult'];
    humanReadableTestCase: { [key: string]: string } | string;
  }>;
} {
  const testCaseAsArguments = options?.testCaseAsArguments;

  return {
    testCasesAndExpectedResults: testCasesAndExpectedResults.map(({ testCase, expectedResult }, index) => {
      let humanReadableTestCase: string | { [key: string]: string } = '';

      if (testCaseAsArguments) {
        if (testCase && typeof testCase === 'object') {
          humanReadableTestCase = {};

          for (const key in testCase) {
            humanReadableTestCase[key] = convertTestCaseToHumanReadableString(testCase[key as keyof typeof testCase]);
          }
        } else {
          throw new Error(`Test case at position ${index} must be an array`);
        }
      } else {
        humanReadableTestCase = convertTestCaseToHumanReadableString(testCase);
      }

      return {
        getTestCase: () => cloneTestCase(testCase),
        expectedResult,
        humanReadableTestCase,
      };
    }),
    solutions,
  };
}

// Converts nested structures to a human-readable format
// E.g. [[1,2],[new ListNode(1, new ListNode(2)),4]] to "[[1,2],[1->2,4]]"
function convertTestCaseToHumanReadableString(testCase: unknown): string {
  let humanReadableTestCase = '#unknown#';

  if (Array.isArray(testCase)) {
    humanReadableTestCase = `[`;
    testCase.forEach((testCaseElement: unknown, index) => {
      humanReadableTestCase += convertTestCaseToHumanReadableString(testCaseElement);

      if (index < testCase.length - 1) {
        humanReadableTestCase += ',';
      }
    });
    humanReadableTestCase += `]`;
  } else if (testCase === null) {
    humanReadableTestCase = 'null';
  } else if (testCase === undefined) {
    return 'undefined';
  } else if (typeof testCase === 'string' || typeof testCase === 'number' || typeof testCase === 'object') {
    humanReadableTestCase = testCase.toString();
  } else {
    throw new Error('Could not convert test case to human-readable format');
  }

  return humanReadableTestCase;
}

// TODO Check types implementation in lodash
function cloneTestCase<T>(testCase: T): T {
  let clonedTestCase: any;

  if (Array.isArray(testCase)) {
    clonedTestCase = testCase.map(cloneTestCase);
  } else if (
    testCase === null ||
    testCase === undefined ||
    typeof testCase === 'string' ||
    typeof testCase === 'number'
  ) {
    clonedTestCase = testCase;
  } else if (isObjectLike(testCase)) {
    if (hasCloneMethod(testCase)) {
      clonedTestCase = testCase.clone();
    } else if (isPlainObject(testCase)) {
      clonedTestCase = {};
      for (const key in testCase) {
        clonedTestCase[key] = cloneTestCase(testCase[key as keyof typeof testCase]);
      }
    }
  } else {
    throw new Error('Could not clone test case');
  }

  return clonedTestCase;
}

function hasCloneMethod(object: { [key: string]: any }): object is { clone: () => unknown } {
  return typeof object.clone === 'function';
}

function getTag(value: unknown): string {
  if (value === null || value === undefined) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function isObjectLike(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function isPlainObject(value: unknown): value is object {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
