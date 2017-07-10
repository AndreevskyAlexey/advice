$(document).ready(function(){

$(".start-block__consulting").click(function() {
});

	$('.check-iq__circle').draggable({
		axis: "x",
		containment: "parent",
		drag: function(){
			$(".check-iq__counter").html(Math.round(parseInt($('.check-iq__circle').css("left"), 10)/316*200));
		}
	});
});


