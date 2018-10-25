$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		$("#btnMenuToggle").click(function() {
			$(".ui.sidebar").sidebar("toggle");
		});
	});

