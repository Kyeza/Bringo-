$(document).ready(function() {
	$("#close-btn-custom").click(function () {
		$("#navbar-custom").remove();
	});
});

$(document).ready(function(){
	$("#onHover").hover(function () {
		$("#go").hide(1000);
	});
});

$(document).ready(function(){
	$(".dropdown-content").hover(function () {
		$("#go").hide();
	});
});

$(document).ready(function(){
	$("#onHover").mouseleave(function () {
		$("#go").show();
	});
});

$(document).ready(function(){
	$(".dropdown-content").mouseleave(function () {
		$("#go").show(1000);
	});
});
