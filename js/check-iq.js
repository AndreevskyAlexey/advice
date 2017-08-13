$(document).ready(function(){

$(".start-block__consulting").click(function() {});

	$('.check-iq__circle').draggable({
		axis: "x",
		containment: "parent",
		drag: function(){
			$(".check-iq").each(function () {
                $(this).children(".check-iq__counter-container").children(".check-iq__counter").html(Math.round(parseInt($(this).children(".check-iq__bar-wrapper").children('.check-iq__circle').css("left"), 10)/316*200));
            });
            console.log("drag");
        }
	});


});


