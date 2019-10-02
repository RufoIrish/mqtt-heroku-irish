// basic functionalities
var broker = true;
var subscribedTopic= [];
//var messaged = false;
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

$(document).ready(function(){
		$("#btn_connect").click(function(){
				client = mqtt.connect($("#addressField").val())
				client.on("connect", function(){
						$("#status").text("Successfully connected!");
				}) 
				client.on("message", function (topic, payload) {
					$("#table").append("<tr><td>" + topic + " : " + payload + time+"</td></tr>")
				//   	messaged = true;
				})
		})
})

$(document).ready(function(){
	$("#btn_disconnect").click(function(){
		client.end();
		$("#status").text("Disconnected!");
		$("#table").text(null);
		$("#publish_message").text(null);
		$("#subscribe_message").text(null);
	})
})

$(document).ready(function(){
	$("#btn_subscribe").click(function(){
			client.subscribe($("#topic_subscribe").val());
			$("#subscribe_status").text("subscribed!");
			client.on("message", function (topic, payload) {
				(topic , payload)
			broker = true;
			for (var e in subscribedTopic){
				if (!e == $("#topic_subscribe").val()){
					$("#subscribe_topics").append("<h5>" + $("#topic_subscribe").val()) + "/h5";
				}
			}
	})
})
})
$(document).ready(function(){
		$("#btn_publish").click(function(){
	
			client.publish($("#topic_publish").val(),$("#payload").val());
			$("#publish_message").append("<h6>" + $("#topic_publish").val()+ " : " + $("#payload").val() + " " + time + "</h6>");
		})
})


$(document).ready(function(){
	$("#btn_unsubscribe").click(function(){
		messaged = false;
		broker = false;
		client.unsubscribe($("#topic_subscribe").val());
		$("#subscribe_status").text("unsubscribed!");
	})
})

