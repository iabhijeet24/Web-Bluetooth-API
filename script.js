
function connect (){navigator.bluetooth.requestDevice({
    filters: [{
        name: 'realme P1 5G'
      }],
    optionalServices: ['battery_service'] 
})
.then(device => {
    console.log('Device selected:', device.name);
    return device.gatt.connect();
})
.then(server => {
    console.log('Connected to GATT Server');
    return server.getPrimaryService('battery_service'); 
})
.then(service => {
    return service.getCharacteristic('battery_level'); 
})
.then(characteristic => characteristic.readValue())
.then(value => {
    console.log(`Your Device's battery percentage is ${value.getunit8(0)}`);
})
.catch(error => console.log('Error:', error));
}