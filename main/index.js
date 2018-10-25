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
		$("#nav").load("../nav/index.html");
		$("#btnMenuToggle").click(function() {
			$(".ui.sidebar").sidebar("toggle");
		});
		
		// ehhh, injection?
		
		list = "";
		for (i in tasks) {
			list += "<div class='ui divider'></div>";
			list += "<a href='/details?id=" + i + "' class='ui basic fluid button noborder'>";
			list += "<div class='ui row header'>" + tasks[i]["title"] + "</div>";
			list += "<p class='ui row'>" + tasks[i]["description"] + "</p>";
			list += "</a>";
		}
		$("#list").html(list);
	});

