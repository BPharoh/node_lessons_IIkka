'use strict';

const storage =  {
    getAllCars, 
    getAllModels, 
    getCar } = require('./carStorage');

    console.log(storage.getAllCarsgetAllCars());
    console.log(storage.getAllModels());
    console.log(`\nAll available models: \n\t${getAllModels().join('\n\t')}`);

    console.log(storage.getCar('model','Fast GT'));
    console.log(storage.getCar('license','A-1'));
    console.log(storage.getCar('model','x'));
    console.log(storage.getCar('model'));
    console.log(storage.getCar('x','x'));