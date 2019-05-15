'use strict';

//const List = require('./list-constructor.js');
const List = require('./list.js');

let stuff = new List();

// Push
console.log('push', stuff.push('a'), stuff);
console.log('push', stuff.push('b'), stuff);
console.log(stuff);

// Pop
console.log(stuff);
console.log('pop', stuff.pop(), stuff);
console.log('pop', stuff.pop(), stuff);
console.log('pop', stuff.pop(), stuff);

// Shift
stuff.push('a');
stuff.push('b');
console.log(stuff);
console.log('shift', stuff.shift(), stuff);
console.log('shift', stuff.shift(), stuff);
console.log('shift', stuff.shift(), stuff);

// Unshift
stuff.unshift('a');
stuff.unshift('b');
console.log(stuff);
console.log('unshift', stuff.unshift('c', 'd'), stuff);
