const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;

  beforeEach(function () {
    park = new Park('Scary Beasts', 10, ['T-Rex', 'Diplodocus'])
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Scary Beasts');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['T-Rex', 'Diplodocus']);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('Eoraptor')
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['T-Rex', 'Diplodocus', 'Eoraptor']);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur('Eoraptor');
    park.addDinosaur('Tricerotops');
    park.removeDinosaur('Tricerotops')
    const actual = park.dinosaurs;
    assert.deepEqual(actual, ['T-Rex', 'Diplodocus', 'Eoraptor']);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
