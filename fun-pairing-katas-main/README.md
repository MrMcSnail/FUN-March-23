# Pairing Katas

Welcome to your first day of Pairing Katas, and your first sprint!

Check out `setup.md` to get started. If you're on GitHub, there's a link to it above here. If you're on VSCode, find it in the Explorer to the left.

The purpose of these exercises is to practice your TDD skills and to adjust to the idea of properly pair programming.

In your pairs, take turns being driver and navigator. Use git and the command line to handle sharing your repo, and switch to your machine when you switch drivers.

The goal of your tests is to ensure your functions return the correct output when given a range of inputs.

The most important thing to test is that your function behaves in the way it should! When you are confident that your function behaves as any reasonable user would expect it to, you should consider **edge cases** where the function may have to deal with extreme, unexpected, unusual or incorrect inputs - but focus on the _'happy path'_ first!

You are testing **'interfaces not implementations'** - you care only about what your function returns when given some input. You should not try to test what exactly is happening inside the function or that people are using it in the correct way, just test that it returns the correct results for a range of different inputs.

## Pairing katas tasks

1. Follow the set-up instructions in `setup.md`.
2. In your katas folder you will find a `*.js` file for each problem that needs solving. You can write your solution code here.
3. Each kata will need a `*.test.js` file associated with it, in the `__tests__` folder. You can write tests for your code here! You will need to import the function using `const <functionName> = require('../path/to/function')`. For example: `const sumDigits = require('../katas/sum-digits.js')`
4. Run `npm test` to run every test in your `__tests__` folder. Whenever you get one or two tests done, swap your pair roles!
5. Below are two sets of katas for you to work on. Please do section 1 first - the order of the katas is a recommendation, but is not compulsory. However, do **start with `sumDigits` as we have provided ideas for tests for this one**.

### Section 1

- sumDigits (_we've provided some ideas for tests for this one_)
- countVeg
- alternateCase
- getCentury
- areOrdered
- checkUsernames
- maxAndMin
- sumArgs
- sumAscii
- getYearsOfGrowth

### Section 2

**_Note_**: think carefully about which Jest matcher is appropriate for each case!

- orderVeg
- checkStudents
- range
- removeDuplicates
- getDistinctLetters
- getFrequencies
- mergeArrays
- getMostRepeated
- lengthenDate
- caesarCipher

## Resources

If you'd like a primer on Test Driven Development, read [this blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

[What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)

[Using a package.json basics](https://docs.npmjs.com/getting-started/using-a-package.json)

[What is in a package.json file](https://docs.npmjs.com/files/package.json)

[Jest documentation](https://jestjs.io/docs/en/getting-started)
