function Thermostat() {
  this.temperature = 20;
  this.powerSaveMode = true;
  this.isHigh = false;
  this.isMedium = true;
  this.isLow = false;
}

Thermostat.prototype.up = function() {
  if (this.temperature >= 25 && this.powerSaveMode) {
      throw('Cannot raise above 25 in power save mode');
  } else if (this.temperature >= 32) {
      throw('Cannot raise above 32');
  } else {
  this.temperature++;
  this.heatRange();
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
      throw('Cannot lower below 10');
  } else {
    this.temperature--;
    this.heatRange();
  }
};

Thermostat.prototype.changePowerMode = function() {
  this.powerSaveMode = !this.powerSaveMode;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.heatRange();
};

Thermostat.prototype.heatRange = function(){
  if (this.temperature >= 25) {
      this.isHigh = true;
      this.isMedium = false;
      this.isLow = false;
  } else if (this.temperature < 25 && this.temperature >=18) {
      this.isHigh = false;
      this.isMedium = true;
      this.isLow = false;
  } else if (this.temperature < 18) {
      this.isHigh = false;
      this.isMedium = false;
      this.isLow = true;
  } else {
    throw('Thermostat broken');
  }
};
