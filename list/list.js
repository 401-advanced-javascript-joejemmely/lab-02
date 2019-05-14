'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  shift() {
    return this.length;
  }

  unshift(item) {
    for (let item of items) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item;
      this.length++;
    }

    return this.length;
  }

  forEach() {
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this.data[i], i);
    }
    return undefined;
  }
}

module.exports = List;
