const createStack = require('../stack');

describe('createStack()', () => {
  describe('should have the following properties:', () => {
    describe('.quantity', () => {
      it('should have an initial value of 0', () => {
        const testStack = createStack();
        const { quantity } = testStack;
        expect(quantity).toBe(0);
      });
      it('should reflect the number of items in the stack storage', () => {
        const testStack = createStack();
        testStack.push('apple');
        expect(testStack.quantity).toBe(1);
        testStack.push('orange');
        expect(testStack.quantity).toBe(2);
      });
    });
    describe('.storage', () => {
      it('should be initially set to an empty object', () => {
        const testStack = createStack();
        const { storage } = testStack;
        expect(storage).toEqual({});
      });
    });
    describe('.maxSize', () => {
      it('should have a default value of 10', () => {
        const testStack = createStack();
        const { maxSize } = testStack;
        expect(maxSize).toEqual(10);
      });
      it('should be accepted as an argument when creating the stack', () => {
        const stackMax5 = createStack(5);
        const stackMax100 = createStack(100);
        expect(stackMax5.maxSize).toEqual(5);
        expect(stackMax100.maxSize).toEqual(100);
      });
    });
  });
  describe('should have the following methods:', () => {
    describe('.push(item: String) --> undefined', () => {
      it('should add items to the stack storage', () => {
        const testStack = createStack();
        testStack.push('apple');
        expect(testStack.storage).toEqual({ 1: 'apple' });
        testStack.push('orange');
        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' });
      });
      it('should not add items if the storage is full', () => {
        const testStack = createStack(1);
        testStack.push('apple');
        expect(testStack.storage).toEqual({ 1: 'apple' });
        testStack.push('orange');
        expect(testStack.storage).toEqual({ 1: 'apple' });
      });
    });
    describe('.pop(item: String) --> item: String', () => {
      it('should remove one item from the stack storage matching the passed argument, returning the item', () => {
        const testStack = createStack();
        testStack.push('apple');
        testStack.push('orange');
        const returnedValue = testStack.pop('apple');
        expect(testStack.storage).toEqual({ 2: 'orange' });
        expect(returnedValue).toBe('apple');
      });
    });
    describe('.isEmpty() --> Boolean', () => {
      it('should return `true` when the stack storage is empty and the current quantity is 0, otherwise return `false`', () => {
        const testStack = createStack();
        expect(testStack.isEmpty()).toBe(true);
        testStack.push('orange');
        testStack.push('apple');
        testStack.push('pear');
        expect(testStack.isEmpty()).toBe(false);
        testStack.pop('orange');
        testStack.pop('apple');
        testStack.pop('pear');
        expect(testStack.isEmpty()).toBe(true);
      });
      describe('.isFull() --> Boolean', () => {
        it('should return `true` when the storage is full, i.e. when the current quantity equals the maxSize, otherwise return false', () => {
          const testStack = createStack(3);
          expect(testStack.isFull()).toBe(false);
          testStack.push('orange');
          testStack.push('apple');
          testStack.push('pear');
          expect(testStack.isFull()).toBe(true);
          testStack.pop('orange');
          testStack.pop('apple');
          expect(testStack.isFull()).toBe(false);
        });
      });
    });
    describe('.peek()', () => {
      it('show the item at the top of the stack storage', () => {
        const testStack = createStack();
        testStack.push('orange');
        testStack.push('apple');
        testStack.push('pear');
        expect(testStack.peek()).toBe('pear');
        testStack.pop('orange');
        testStack.pop('pear');
        expect(testStack.peek()).toBe('apple');
      });
    });
  });
});
