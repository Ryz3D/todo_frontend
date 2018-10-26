tasks = [
	{
		'id': 0,
		'title': 'Why is the milk gone?',
		'desc': 'Description.',
		'date': '18.9.2022',
		'repeat': 1,
		'trash': 0
	},
	{
		'id': 1,
		'title': 'Task No. 2',
		'desc': 'Description No. 2',
		'date': '19.9.2022',
		'repeat': 2,
		'trash': 1
	}];

$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		
		var app = new Vue({
			el: '.pusher',
			data: {
				tasks: tasks.filter(t => t.trash == 1)
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				}
			}
		});
	});
