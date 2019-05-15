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
  this.name = name;
  this.wheels = 4;
  return Object.assign(this, Vehicle());
}

function Motorcycle(name) {
  this.name = name;
  this.wheels = 2;

  function wheelie() {
    return 'Wheee!';
  }

  return Object.assign(this, Vehicle(), { wheelie });
}

module.exports = { Car, Motorcycle };
