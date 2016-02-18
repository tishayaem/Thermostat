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

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function() {
  thermostat.switchPowerSavingModeOff();
  expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function() {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
it('can be reset to the default temperature', function() {
  for (var i = 0; i < 6; i++) {
    thermostat.up();
  }
  thermostat.reset();
  expect(thermostat.getCurrentTemperature()).toEqual(20);
});
});
