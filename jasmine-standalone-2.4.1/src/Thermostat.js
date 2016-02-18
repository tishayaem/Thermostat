'use strict';
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingModeOn = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
     return;
   }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingModeOn = true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingModeOn = false;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true;
}

Thermostat.prototype.reset = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE
}
