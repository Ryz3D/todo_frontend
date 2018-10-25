$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		$("#btnMenuToggle").click(function() {
			$(".ui.sidebar").sidebar("toggle");
		});
		$(".ui.calendar").calendar({type: 'date'});
		$(".ui.dropdown").dropdown();
	});

