$(document).ready(function(){


	$("html").on("click", function(){
		if ($(".search").hasClass("extend-width")) {
			$(".search").removeClass("extend-width");
		}
		if ($(".nav-menu").hasClass("hide")) {
			$(".nav-menu").removeClass("hide");
		}
	});


	$(".search").on("click", function(event){
		$(this).addClass("extend-width");
		$(".nav-menu").addClass("hide");
		event.stopPropagation();
	});
});