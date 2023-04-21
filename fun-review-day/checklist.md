# Revision Checklist Learning Objectives

The following points are a collation of all advertised learning objectives associated with lectures/ seminars you've attended so far and supplementary notes.

You may find it useful to assess the skills you've developed and where you feel most comfortable against the objectives on this list in order to more effectively target your focus and select some revision material you'd like to take a look at ahead of next Monday.

There are links to the associated notes as well as the relevant/ suggested sprint.

## Intro Week

- Sprint: [intro-week](https://github.com/northcoders/intro-week)

- [ ] Understand what is meant by a command line interface
- [ ] Know how to use the command line to navigate between directories
  - [command line notes](https://notes.northcoders.com/courses/js-intro-week/command-line)
- [ ] Know why version control is useful in software development
- [ ] Understand that git is version control software
  - [git notes](https://notes.northcoders.com/courses/js-intro-week/git)
- [ ] Understand that a function is a set of instructions within a program
- [ ] Know how to run a JavaScript file using NodeJS
- [ ] Know how to leave comments in a JavaScript file
  - [JS intro notes](https://notes.northcoders.com/courses/js-intro-week/js-intro)
- [ ] Know the different primitive data types
- [ ] Understand that operations can be performed on data in JavaScript
- [ ] Know how to assign data to a variable
  - [data, variables and expressions notes](https://notes.northcoders.com/courses/js-intro-week/data-variables-and-expressions)
- [ ] Understand how `if` statements can be used to execute code only under certain conditions
- [ ] Understand the concept of truthy and falsy values
- [ ] Know how conditional operators can be used in JavaScript
  - [conditional logic notes](https://notes.northcoders.com/courses/js-intro-week/logic)
- [ ] Understand the benefits of using functions
- [ ] Know how to invoke functions in JavaScript
- [ ] Know how to declare functions in JavaScript
  - [functions notes](https://notes.northcoders.com/courses/js-intro-week/functions-and-execution-context)
- [ ] Understand that arrays are ordered lists of values
- [ ] Know how to declare arrays in JavaScript
- [ ] Understand how `for` loops are used in JavaScript
- [ ] Know how to use `for` loops and `for...of` loops to iterate over arrays
  - [arrays and iteration notes](https://notes.northcoders.com/courses/js-intro-week/arrays-and-iteration)
- [ ] Know the most common JavaScript error types
- [ ] Know how to read JavaScript error messages
  - [understanding errors notes](https://notes.northcoders.com/courses/js-intro-week/understanding-errors)
- [ ] Know when to use an object over an array
- [ ] Know how to access properties on an object
- [ ] Know when to use dot notation vs square bracket notation to access object properties dynamically
- [ ] Know how to iterate through an object's keys with a `for...in` loop
  - [objects notes](https://notes.northcoders.com/courses/js-intro-week/objects)
- [ ] Know what a higher order function is in JavaScript
- [ ] Know how to use map, filter and forEach array methods
- [ ] Understand when to use map, filter and forEach array methods
  - [array methods notes](https://notes.northcoders.com/courses/js-intro-week/using-array-methods)
- [ ] Understand that in NodeJS, each file is treated as a separate "module"
- [ ] Know that module is an object that represents the current module
- [ ] Know how require is a function used to include modules from other files within the current file
- [ ] Know that `module.export`s is the value returned when the module is required elsewhere
  - [exports and require notes](https://notes.northcoders.com/courses/js-intro-week/exports-and-require)

## Fundamentals So Far...

- [ ] Understand a little of what Node offers in how JS is run.
- [ ] Understand some differences between the Node REPL and running files/modules with node.
- [ ] Understand some uses of npm, a package manager for node.
  - [node notes](https://notes.northcoders.com/courses/js-fundamentals/node)
- [ ] Understand how to write unit tests using jest
- [ ] Understand how to install modules with npm
- [ ] Understand the difference between a dependency and a devDependency
- [ ] Understand how to break down a function into distinct test cases
  - [testing notes](https://notes.northcoders.com/courses/js-fundamentals/testing)
- [ ] Gain understanding of higher order functions
- [ ] Understand how map works
- [ ] Understand how filter works
  - [array methods notes](https://notes.northcoders.com/courses/js-fundamentals/array-methods-101)
- [ ] Understand certain features and behaviours of JS like hoisting
- [ ] Understand what we mean by scope in javascript
- [ ] Understand how JavaScript engine looks up variables in code
- [ ] Understand what is meant by block scope
  - [scope notes](https://notes.northcoders.com/courses/js-fundamentals/scope)
- [ ] Understand the difference between value versus reference
- [ ] Understand what it means for a data type to be immutable
- [ ] Understand how non-primtive data types are held on reference
- [ ] Understand the different ways an object can be mutated - dot notation and square bracket notation
- [ ] Understand the difference between assertions using toBe and toEqual
- [ ] Understand how to approach testing concerned with immutability

  - [value vs reference notes](https://notes.northcoders.com/courses/js-fundamentals/value-vs-reference)

### Array Methods and Testing Recap Suggestion

- Revisit the [fun-purer-functions](https://github.com/northcoders/fun-purer-functions) sprint

  - Ensure you are using a higher order array method where applicable and breaking down your tests appropriately to assert for simple behaviours before incrementally increasing complexity
  - Ensure your functions are _pure_ with tests for _new references_ being returned where necessary and always ensuring the inputs are not _mutated_

---

- [ ] Learn how functions can be returned out of functions
- [ ] Understand what closure means in javascript
- [ ] Learn how to use closure to create functions with certain useful behaviours

  - [closure notes](https://notes.northcoders.com/courses/js-fundamentals/closure)

### Closure Recap Suggestion

- Revisit the [fun-higher-order-workshop](https://github.com/northcoders/fun-higher-order-workshop) sprint

  - Either continue from where you left off or make a fresh start
    - You may wish to re-fork to not disturb any of the work you did as a pair
  - The tests for your functions are already in place and provide you the freedom to focus on understanding the concept

---

- [ ] Learn the key features of recursive functions (base case, recursive case, recursive step)
- [ ] Understand considerations and approaches when writing recursive solutions
  - [recursion 101 notes](https://notes.northcoders.com/courses/js-fundamentals/recursion-101)
- [ ] Understand when recursive solutions are necessary

  - [recursion 102 notes](https://notes.northcoders.com/courses/js-fundamentals/recursion-102)

### Recursion recap Suggestion

- Revisit the [fun-recursion](https://github.com/northcoders/fun-recursion) sprint

  - Move straight onto part 2 where the focus is on the traversal of nested data structured at an unknown depth

---

- [ ] Understand how implicit binding applies the value of `this`
  - [factory functions and `this` notes](https://notes.northcoders.com/courses/js-fundamentals/Factory-Functions)
- [ ] Understand how instances share methods from their constructor's prototype
  - [prototypes and inheritance notes](https://notes.northcoders.com/courses/js-fundamentals/Prototypes-and-Inheritance)
- [ ] Understand ES6 class syntax
- [ ] Understand that classes use the prototypal inheritance mechanism under the hood

  - [classes notes](https://notes.northcoders.com/courses/js-fundamentals/Constructors-and-Classes)

### OOP Recap Suggestion

- Revisit the [fun-data-structures](https://github.com/northcoders/fun-data-structures) sprint
  - Make a fresh start on implementing the _stack_ data structure with full TDD but instead make use of ES6 Class syntax
    - There will be no need to delete any of your previous work with factory functions, just make new files for testing and implementation
