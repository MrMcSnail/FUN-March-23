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

function collect(generator, array) {
  return () => {
    const val = generator();
    array.push(val);
    return val;
  };
}

function filter(generator, predicate) {
  return ()=> {
    const value = generator();
    const passesPredicateTest = predicate(value);
    if (passesPredicateTest) return value;
  };
}

function concat(gen1, gen2) {
  return function () {
    const valueGen1 = gen1();
    const firstGenComplete = valueGen1 === undefined;
    return firstGenComplete && gen2 ? gen2() : valueGen1;
  };
}
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
