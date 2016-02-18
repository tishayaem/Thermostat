$( document ).ready(function() {

  var thermostat = new Thermostat();


  $('#temperature').text(thermostat.temperature);

  $('#reset').click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempup').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempdown').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#poweron').click(function(){
    thermostat.switchPowerModeOn();
    $('#power-saving-status').text(thermostat.powerMode());

  });

  $('#poweroff').click(function(){
    thermostat.switchPowerModeOff();
    $('#power-saving-status').text(thermostat.powerMode());
  });

});
