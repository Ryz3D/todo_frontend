$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		
		var app = new Vue({
			el: '.pusher',
			data: {
				
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				}
			}
		});
	});

