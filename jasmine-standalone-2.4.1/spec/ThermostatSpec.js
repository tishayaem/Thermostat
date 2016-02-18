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
  thermostat.up();
  expect(thermostat.getCurrentTemperature()).toEqual(21);
});
it('increases the temperature when pushing up button', function(){
  thermostat.down();
  expect(thermostat.getCurrentTemperature()).toEqual(19);
});
it('can go down to a minimum 10 degrees', function() {
  for (var i = 0; i < 11; i++) {
    thermostat.down()
  }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
});
});
