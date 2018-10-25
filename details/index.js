tasks = [
	{
		'title': 'Why is the milk gone?',
		'description': 'Description.'
	},
	{
		'title': 'Task No. 2',
		'description': 'Description No. 2'
	}];

$(document)
	.ready(function() {
		$(".ui.dropdown").dropdown();
		$("#nav").load("../nav/index.html");
		$("#btnMenuToggle").click(function() {
			$(".ui.sidebar").sidebar("toggle");
		});
		$urlParam = function(id) {
			var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
			if (results == null)
				return null;
			else
				return decodeURI(results[1]) || 0;
		}
		var id = parseInt($urlParam("id"));
		if (id != NaN) {
			$("#title").text(tasks[id]['title']);
			$("#description").text(tasks[id]['description']);
		}
	});

