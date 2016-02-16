function Thermostat(mode) {
  this.temperature = 20;
  this.powerSaveMode = true;
}

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
if (this.temperature <= 10) {
    throw('Cannot lower below 10');
}   else {
    this.temperature--;
    }
};

Thermostat.prototype.changePowerMode = function() {
  this.powerSaveMode = !this.powerSaveMode;
};
