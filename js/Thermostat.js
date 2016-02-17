function Thermostat() {
  this.temperature = 20;
  this.powerSaveMode = true;
  this.energyUsage = function() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature >= 18 && this.temperature < 25){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  };
}

Thermostat.prototype.up = function() {
  if (this.temperature >= 25 && this.powerSaveMode) {
      throw('Cannot raise above 25 in power save mode');
  } else if (this.temperature >= 32) {
      throw('Cannot raise above 32');
  } else {
  this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
      throw('Cannot lower below 10');
  } else {
    this.temperature--;
  }
};

Thermostat.prototype.switchPowerModeOff = function(){
  this.powerSaveMode = false;
};

Thermostat.prototype.switchPowerModeOn = function(){
  this.powerSaveMode = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
