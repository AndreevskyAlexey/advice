$(document).ready(function(){

$(".start-block__consulting").click(function() {
	$(".start-block__consulting").addClass("start-block__consulting--selected");
	$(".start-block__adviser").addClass("start-block__adviser--unselected");
	$(".start-block").addClass("start-block--disabled");
});

$(".start-block__adviser").click(function() {
	$(".start-block__adviser").addClass("start-block__adviser--selected");
	$(".start-block__consulting").addClass("start-block__consulting--unselected");
	$(".start-block").addClass("start-block--disabled");

	$(".adviser-block").removeClass("disabled-block");
});

});


