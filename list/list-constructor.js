'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;
};

List.prototype.pop = function() {
  if (this.length == 0) return undefined;
  const returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  if (this.length == 0) return undefined;

  // Save the return value
  const returnValue = this.data[0];
  delete this.data[0];
  this.length--;

  // Reasign values to the new index
  for (let i = 0; i < this.length + 1; i++) {
    this.data[i] = this.data[i + 1];
  }

  // Remove the last element at the previous index
  delete this.data[this.length];
  return returnValue;
};

List.prototype.unshift = function(...items) {
  for (let item of items) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }

  return this.length;
};

List.prototype.forEach = function(callback) {
  for (let i = 0; i <= this.length - 1; i++) {
    callback(this.data[i], i);
  }
  return undefined;
};

module.exports = List;
