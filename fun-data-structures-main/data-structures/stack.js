/* eslint-disable guard-for-in */
function createStack(maxSize = 10) {
  const stack = {
    storage: {},
    quantity: 0,
    maxSize,
    push,
    pop,
    isEmpty,
    isFull,
    peek
  };
  return stack;
}

function push(item) {
  this.quantity++;
  if (this.quantity <= this.maxSize) {
    const storageSlots = Object.keys(this.storage);
    const topOfStorageStack = Math.max(...storageSlots);

    this.storage[topOfStorageStack + 1] = item;
  }
}
function pop(search) {
  const tempStore = { ...this.storage };
  if (this.quantity) {
    for (const item in tempStore) {
      const isItemForRemoval = tempStore[item] === search;
      if (isItemForRemoval) {
        delete this.storage[item];
        this.quantity--;
        return tempStore[item];
      }
    }
  }
}

function isEmpty() {
  return this.quantity === 0;
}

function isFull() {
  return this.quantity === this.maxSize;
}

function peek() {
  const storageSlots = Object.keys(this.storage);
  const topOfStorageStack = Math.max(...storageSlots);
  return this.storage[topOfStorageStack];
}
module.exports = createStack;
