repeatText = [
	'',
	'Once',
	'Weekly',
	'Monthly',
	'Annually'
];

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
		
		tasksRef.child(id).once("value").then(function(s) {app.task = s.val();});
		
		app = new Vue({
			el: '.pusher',
			data: {
				task: {
					'id': -1,
					'title': '',
					'desc': '',
					'date': '',
					'repeat': 0,
					'trash': 0
				},
				repeatText: repeatText
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				}
			}
		});
	});

