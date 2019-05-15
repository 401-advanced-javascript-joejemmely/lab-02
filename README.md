# LAB - 02

## Classes, Inheritance, Functional Programming

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/lab-02/pull/1)
- [travis](https://travis-ci.com/401-advanced-javascript-joejemmely/lab-02)

### Modules

#### `vehicle-[class|constructor|factory].js`

##### Exported Values and Methods

###### `Car.drive() -> string`

###### `Car.stop() -> string`

###### `Motorcycle.drive() -> string`

###### `Motorcycle.stop() -> string`

###### `Motorcycle.wheelie() -> string`

#### `list-[constructor].js`

##### Exported Values and Methods

###### `List.push() -> int`

###### `List.pop() -> removedItem || undefined`

###### `List.shift() -> removedItem || undefined`

###### `List.unshift() -> int`

#### Tests

##### Vehicle

- A car has 4 wheels
- A car can drive
- A car can stop
- A car cannot do a wheelie

- A motorcycle has 2 wheels
- A motorcycle can drive
- A motorcycle can stop
- A motorcycle can do a wheelie

##### List

- Initialize a empty list
- Update and return the length when new items are pushed
- Pop and element out the list, update the length and return the element that was poped out
- Update and re
