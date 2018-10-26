repeatText = [
	'',
	'Once',
	'Weekly',
	'Monthly',
	'Annually'
];

tasks = [
	{
		'id': 0,
		'title': 'Why is the milk gone?',
		'desc': 'Description.',
		'date': '18.9.2022',
		'repeat': 1
	},
	{
		'id': 1,
		'title': 'Task No. 2',
		'desc': 'Description No. 2',
		'date': '19.9.2022',
		'repeat': 2
	}];

$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		
		$urlParam = function(id) {
			var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
			if (results == null)
				return null;
			else
				return decodeURI(results[1]) || 0;
		}
		var id = parseInt($urlParam("id"));
		if (id == NaN)
			return;
		
		var app = new Vue({
			el: '.pusher',
			data: {
				task: tasks[id],
				repeatText: repeatText
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				}
			}
		});
	});

