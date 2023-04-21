# Review day Questions

The review day is designed to assess the students understanding of the fundamentals block. They should have a practical working knowledge of the subjects covered and be comfortable enough with TDD principles to progress through the tasks set. It is important to note that they are not expected to remember everything covered but to have a tool-set that allows them to progress with the problems. Their understanding should be good enough that they can progress through the blocks of the course without being hindered by a lack of fundamental understanding.

## Usage

During review day we are assessing the students understanding of the following sections as well as their ability to implement solutions to the set problems.

### Principles

These are what they should be able to demonstrate on each section of the review. There isn't a set amount of these that they have to demonstrate but should cover the majority of them in either their implementations or in answer to questions.

### Questions

These are open ended questions to ask students as part of their review. They are designed to give the students enough room to explain their understanding of the topic and talk around the subject. Personality will play a large factor here and some students may require prompting to elaborate or some follow up questions to drill down into more detail. As with the principles they are not expected to be hit every point listed but to have a working knowledge of the subject and most importantly a good toolset for approaching the subject and improving their skills in the future. Assessments should be based on whether they have a good enough understanding of the topics to continue through the following blocks without being held back by their current understanding.

## Array Methods

### Principles

- [ ] able to write tests for the functionality
- [ ] understand how to separate behaviours into individual tests
- [ ] use appropriate array methods
- [ ] dynamic object keys in `createPoll`
- [ ] not mutating the inputs (pure functions)

### Questions

- Describe how TDD works

  - [ ] test behaviours independently
  - [ ] start with simple behaviours and work towards complex ones
  - [ ] makes it easier to reason around complex problems
  - [ ] red, green, refactor cycle avoids false positives
  - [ ] independent tests are much clearer for debugging

- How does the map array method work?

  - [ ] creates a new array of the same length
  - [ ] iterates over the array it's called on
  - [ ] takes a function as an argument, this function is invoked with each element (plus index and array) in turn
  - [ ] the new array is made up of the passed functions return values

Things to watch out for:

- Blindly copying the examples from the README. This may indicate they haven't considered the problem fully or the expected behaviours. Why did you use this example? What behaviour are you testing here? It's worth noting that it's fine to use the examples so long as the testing is good.
- Nondescriptive test names. If they don't understand what they're testing enough to write a description of it there is likely to be a deeper lack of understanding of TDD.

## Closure

### Principles

- [ ] able to create and return a function
- [ ] understand which functions are being referred to in the examples i.e. the "innerFunctions" are stored in the variables
- [ ] use variables in a closed scope to perform logic
- [ ] use `rest params` and `spread` syntax to have a dynamic number of arguments

### Questions

- Why can you still use the variables defined in the parent function? (can be specific, e.g why can you still use the `arg` parameter in your `innerFunc`?)

  - [ ] the variable is in scope
  - [ ] closure means that it is always accessible
  - [ ] stored in the COVE

## OOP

### Principles

- [ ] able to write a class constructor
- [ ] able to instantiate a class with the `new` keyword
- [ ] able to write class methods
- [ ] able to use the `this` keyword to access instances from within classes
- [ ] able to apply TDD to classes

### Questions

- Explain how a method on a class works

  - [ ] an instance of the class is created with the `new` keyword
  - [ ] this instance has a link back to the methods of the class (prototype)
  - [ ] when a method is called it can access the instance with `this`
  - [ ] the value of `this` is bound at run-time

- How does the `this` keyword work?

  - [ ] the value of `this` is bound at run-time (the object that called the method)
  - [ ] `this` is a reference to the object that called the method (implicit binding)
  - [ ] the objects properties and methods can be used as normal once the reference is obtained

- What is OOP?

  - [ ] it's a style of programming (paradigm) where objects are the focus
  - [ ] everything is represented by objects with properties and methods
  - [ ] behaviours are held in methods (functions)
  - [ ] values are held in properties
  - [ ] we define the shape (class) of the objects and create (instantiate) copies of it

## Recursion

### Principles

- [ ] able to make a recursive call in a function
- [ ] understand what a base case is
- [ ] understand how to avoid infinite loops with a recursive step
- [ ] understand that base case is generally the simplest behaviour for TDD

### Questions

- What is recursion
  - [ ] when a function makes a call to itself
  - [ ] recursive functions have both a base case and a recursive case - when they do and don't call themselves
  - [ ] base cases are necessary to avoid infinite loops
  - [ ] the function will continue to call itself until that base case is hit
  - [ ] recursion is a useful alternative to looping, unknown levels of nesting being the classic example
