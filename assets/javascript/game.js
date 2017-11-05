var wins=0;
var losses=0;
var math=0;

var number= Math.floor((Math.random()* 100)+ 19);

var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var configmath = function() {
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.userTotal').empty();
	$('.userTotal').append(math);
}


var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('#randomNumber').empty();
	$('#randomNumber').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}

	$('.userTotal').append(math);
	$('#randomNumber').append(number);

	$(document).ready(function(){
	$('#blue').click(function(){
		math = math + red;
		config();
	})
	$('#red').click(function(){
		math  = math  + blue;
		config();
	})
	$('#yellow').click(function(){
		math  = math  + yellow;
		config();
	})
	$('#green').click(function(){
		math  = math  + green;
		config();
	})
});

