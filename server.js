var mqtt    = require('mqtt');
var count =0;
var client  = mqtt.connect("ws://test.mosquitto.org:8080/mqt");
  
var broker = true;
var topic = "irish";
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.write(time);
var payload;
//  var mqtt=require('mqtt');
// var client = connect("ws://test.mosquitto.org:8080/mqtt");
// var on = client.on("connect")

    $("#1").click(function () {
        checkInput("1");
    })
$("#2").click(function () {
    checkInput("2");
})
$("#3").click(function () {
    checkInput("3");

})
$("#off").click(function () {
    checkInput("off");

})

function checkInput(label) {
    $("h2").text("turned at " + label);
    payload = "turned at " + label + " " + time;
    client.publish(topic,payload);
}
