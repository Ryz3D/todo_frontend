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

var config = {
	apiKey: "AIzaSyC1_a0kfoNjVNGw6fmn2fGAesjd6ycBAMw",
	authDomain: "todo-51d3e.firebaseapp.com",
	databaseURL: "https://todo-51d3e.firebaseio.com",
	projectId: "todo-51d3e",
	storageBucket: "todo-51d3e.appspot.com",
	messagingSenderId: "597208306235"
};
firebase.initializeApp(config);

var tasksRef = firebase.database().ref('users/ryz/tasks');

var app;

$(document)
	.ready(function() {
		$urlParam = function(id) {
			var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
			if (results == null)
				return null;
			else
				return decodeURI(results[1]) || 0;
		}
		var id = parseInt($urlParam("id"));
		
		var task = {
				'id': -1,
				'title': '',
				'desc': '',
				'date': new Date(),
				'repeat': 1
			};
		if (!isNaN(id) && id != null && id != undefined)
			tasksRef.child(id).once("value").then(function(s) {
				app.task = s.val();
				d = app.task.date.split(".");
				app.task.date = d[1] + "/" + d[0] + "/" + d[2];
				$(".ui.calendar").calendar({type: 'date'});
			});
		
		app = new Vue({
			el: '.pusher',
			data: {
				task: task
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				},
				update: function() {
					var d = $(".ui.calendar").calendar("get date")[0];
					dateStr = d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear();
					
					newTask = {
						id: app.task.id,
						title: app.task.title,
						desc: app.task.desc,
						date: dateStr,
						repeat: app.task.repeat,
						trash: app.task.trash
					};
					
					console.log(newTask);
				},
				del: function() {
					
				}
			}
		});
		
		$("#nav").load("../nav/index.html");
		$(".ui.dropdown").dropdown();
	});

