const { add, addF, curry } = require('../index.js');

describe('Functions with multiple invocations', () => {
  describe.only('addF', () => {
    it.only('returns a function on first invocation', () => {
      expect(typeof addF(3)).toBe('function');
    });
    it.only('returns the total of both invocations', () => {
      const addTo3 = addF(3);
      const threePlusFour = addTo3(4);

      expect(threePlusFour).toBe(7);
    });

    it.only('returned function is reusable', () => {
      const add100 = addF(100);
      console.log('add100 : ', add100.toString());
      expect(add100(5)).toBe(105);
      expect(add100(100)).toBe(200);
      expect(add100(-100)).toBe(0);
    });
  });
  describe('curry', () => {
    it('will take a binary function and a single value as arguments and return a function', () => {
      expect(typeof curry(add, 5)).toBe('function');
    });
    it('second invocation will return the result', () => {
      const timesByThirty = curry(multiply, 30);
      expect(timesByThirty(6)).toBe(multiply(30, 6));

      const addSeven = curry(add, 7);
      expect(addSeven(11)).toBe(add(7, 11));
    });
  });
});
