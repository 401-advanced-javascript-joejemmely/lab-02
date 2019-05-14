'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.wheels, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheels, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const renault = new VehicleClass.Car('Renault Twingo');
console.log(renault.name, renault.wheels, renault.drive(), renault.stop());

const ktm = new VehicleClass.Motorcycle('KTM SMC');
console.log(ktm.name, ktm.wheels, ktm.wheelie(), ktm.stop());

// Implement a car and motorcycle using a Factory
const peugeot = new VehicleFactory.Car('Peugeot 206');
console.log(peugeot.name, peugeot.wheels, peugeot.drive(), peugeot.stop());

const yamaha = new VehicleFactory.Motorcycle('Yamaha');
console.log(yamaha.name, yamaha.wheels, yamaha.wheelie(), yamaha.stop());
