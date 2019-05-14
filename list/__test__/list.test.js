'use strict';

// These 2 should be interchangeable!
//const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes the last item of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual(undefined);
  });

  xit('remvoves the first item of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    stuff.shift();
    expect(stuff.length).toEqual(1);
    stuff.shift();
    expect(stuff.length).toEqual(0);
    stuff.shift();
    expect(stuff.length).toEqual(undefined);
  });

  it('pushes items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('b');
  });
});
