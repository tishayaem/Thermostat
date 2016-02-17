(function () {
   'use strict';
   // this function is strict...
}());

describe ("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ("has a starting temparature of 20", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it ("starts with power saving mode on", function(){
    expect(thermostat.powerSaveMode).toBeTruthy();
  });

  it ("is in the medium heat range on initialization", function(){
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  describe ("up", function(){

    it ("raises the temperature by 1", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("only raises the temperature up to the maximum", function(){
      thermostat.temperature = 25;
      expect(function(){thermostat.up();}).toThrow('Cannot raise above 25 in power save mode');
    });

  });

  describe ("down", function(){

    it("lowers the temperature by 1", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("only lowers to the minimum temperature", function(){
      thermostat.temperature = 10;
      expect(function(){thermostat.down();}).toThrow('Cannot lower below 10');
    });

  });

  describe ("switchPowerModeOff", function(){

    it("changes the powerSaveMode off if its on", function(){
      thermostat.switchPowerModeOff();
      expect(thermostat.powerSaveMode).toBeFalsy();
    });

  });

  describe ("switchPowerModeOn", function(){

    it("changes the powerSaveMode on if it is off", function(){
      thermostat.switchPowerModeOn();
      expect(thermostat.powerSaveMode).toBeTruthy();
    });

  });

  describe ("powerSaveMode on", function(){

    it("can raise the temperature up to 32", function(){
      thermostat.switchPowerModeOff();
      thermostat.temperature = 32;
      expect(function(){thermostat.up();}).toThrow('Cannot raise above 32');
    });

  });

  describe("reset", function(){

    it("resets the temperature to 20", function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("energyUsage", function(){

    it("returns high if temperature is >= 25 ", function(){
      thermostat.temperature = 30;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

    it("returns medium if temperature is < 20 and >= 18 ", function(){
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it("returns high if temperature is >= 25 ", function(){
      thermostat.temperature = 16;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

  });

});
