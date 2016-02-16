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

  describe ("up", function(){

    it ("raises the temperature by 1", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
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

  describe ("changePowerMode", function(){

    it("changes the powerSaveMode off if its on", function(){
      thermostat.changePowerMode();
      expect(thermostat.powerSaveMode).toBeFalsy();
    });

    it("changes the powerSaveMode back on if it's off", function(){
      thermostat.changePowerMode();
      thermostat.changePowerMode();
      expect(thermostat.powerSaveMode).toBeTruthy();
    });


  });

});
