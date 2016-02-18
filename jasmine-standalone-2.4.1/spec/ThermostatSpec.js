'use strict'
describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
it('increases the temperature when pushing up button', function(){
  thermostat.increaseTemperature();
  expect(thermost.getCurrentTemperature()).toEqual(21);
});
it('increases the temperature when pushing up button', function(){
  thermostat.down();
  expect(thermost.getCurrentTemperature()).toEqual(19);
});
});
