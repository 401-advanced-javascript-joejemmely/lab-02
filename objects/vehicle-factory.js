'use strict';

function Vehicle(name) {
  return {
    drive() {
      return 'Moving Forward';
    },

    stop() {
      return 'Stopping';
    },
  };
}

function Car(name) {
  let car = Object.assign(Vehicle());
  car.name = name;
  car.wheels = 4;
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(Vehicle(), { wheelie });
  motorcycle.name = name;
  motorcycle.wheels = 2;

  function wheelie() {
    return 'Wheee!';
  }

  return motorcycle;
}

module.exports = { Car, Motorcycle };
