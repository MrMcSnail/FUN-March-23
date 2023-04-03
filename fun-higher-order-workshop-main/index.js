function identity(argument) {
  return argument;
}

function identityF(argument) {
  function identity() {
    return argument;
  }
  return identity;
}

function add(summand1, summand2) {
  return summand1 + summand2;
}

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function multiply(multiplier, multiplicand) {
  return multiplier * multiplicand;
}

function increment(num) {
  return add(num, 1);
}

function addF(num) {
  function add(summand2) {
    return num + summand2;
  }
  return add;
}

function curry(binaryFunc, ...args) {
  return function (...secondArgs) {
    return binaryFunc(...args, ...secondArgs);
  };
}

function liftF(binaryFunc) {
  return function (first) {
    return function (second) {
      return binaryFunc(first, second);
    };
  };
}

function once(func) {
  let calls = 0;
  let initial = null;
  return function (...args) {
    if (!calls) {
      calls++;
      initial = func(...args);
    }
    return initial;
  };
}

function twice(binaryFunc) {
  return function (argument) {
    return binaryFunc(argument, argument);
  };
}

function composeU(unaryFunc1, unaryFunc2) {
  return function (arg) {
    return unaryFunc2(unaryFunc1(arg));
  };
}

function composeB(binaryFunc1, binaryFunc2) {
  return function (...args) {
    return binaryFunc2(binaryFunc1(args[0], args[1]), args[2]);
  };
}

function limit(binaryFunc, maxCalls) {
  let calls = 0;
  return function (...args) {
    if (calls < maxCalls) {
      calls++;
      return binaryFunc(...args);
    }
  };
}

function from(start) {
  return function () {
    start++;
    return start - 1;
  };
}
// 14. Write a `to` function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit (not inclusive).

// ```js
// const index = to(from(1), 3);
// index(); // 1
// index(); // 2
// index(); // undefined
// ```

function to(generator, end) {
  return function () {
    const integer = generator();
    if (integer < end) {
      return integer;
    }
  };
}

function fromTo(start, end) {
  return function () {
    start++;
    return start <= end ? start - 1 : undefined;
  };
}
function element(array, generator) {
  let index = -1;
  return function () {
    if (generator) {
      index = generator();
      return array[index];
    } else {
      index++;
      return array[index];
    }
  };
}
// 18. Write a `collect` function that takes a generator and an array and produces a function that will collect the results in the array by mutating it.

// ```js
// const array = [];
// const col = collect(fromTo(0, 2), array);
// col(); // 0
// col(); // 1
// col(); // undefined
// array; // [0, 1]
// ```

function collect() {}
// 19. Write a `filter` function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate.

// ```js
// function third(value) {
//   return value % 3 === 0;
// }
// const fil = filter(fromTo(0, 5), third);
// fil(); // 0
// fil(): // undefined
// fil(): // undefined
// fil(); // 3
// fil(); // undefined
// ```

function filter() {}
// 20. Write a `concat` function that takes two generators and produces a generator that combines the sequences.

// ```js
// const con = concat(fromTo(0, 3), fromTo(0, 2));
// con(); // 0
// con(); // 1
// con(); // 2
// con(); // 0
// con(); // 1
// con(); // undefined
// ```

function concat() {}
// 21. Make a function `fibonacciF` that returns a generator that will return consecutive fibonacci numbers starting with the first two arguments.

// ```js
// const fib = fibonacciF(0, 1);
// fib(); // 0
// fib(); // 1
// fib(); // 1
// fib(); // 2
// fib(); // 3
// fib(); // 5
// ```

function fibonacciF() {}
// 22. Make a function `genSymF` that makes a function that generates unique symbols.

// ```js
// const genG = genSymF('G');
// const genH = genSymF('H');
// genG(); // "G0"
// genH(); // "H0"
// genG(); // "G1"
// genH(); // "H1"
// genG(); // "G2"
// genH(); // "H2"
// ```

function genSymF() {}
// 23. Write a function `genSymFF` that takes a unary function and a seed and returns a `gensymf`

// ```js
// const genSymF = genSymFF(increment, 0);
// const genG = genSymF('G');
// const genH = genSymF('H');
// genG(); // "G1"
// genH(); // "H1"
// genG(); // "G2"
// genH(); // "H2"
// ```

function genSymFF() {}
// 24. Write a `counter` function that returns an object containing two functions that implement an up/down counter, hiding the counter value itself.

// ```js
// const object = counter(10);
// const up = object.up;
// const down = object.down;
// up(); // 11
// down(); // 10
// down(); // 9
// up(); // 10
// ```

function counter() {}
// 25. Write a `revokable` function that takes a binary function, and returns an object containing an `invoke` function that can invoke the binary function, and a `revoke` function that disables the `invoke` function.

// ```js
// add.invoke(3, 4); // 7
// add.revoke();
// add.invoke(5, 7); // undefined
// ```

function revokable(func) {
  return {
    func,
    revoke() {
      this.func = () => {};
    },
    invoke(...args) {
      return this.func(...args);
    },
  };
}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  once,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
