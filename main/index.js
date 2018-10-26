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

/*
{
	"rules": {
		"users": {
			"$uid": {
				".read": "$uid == auth.uid",
				".write": "$uid == auth.uid"
			}
		}
	}
}
*/

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

$(document)
	.ready(function() {
		$("#nav").load("../nav/index.html");
		
		var app = new Vue({
			el: '.pusher',
			data: {
				//tasks: tasks.filter(t => t.trash == 0)
			},
			methods: {
				menuToggle: function() {
					$(".ui.sidebar").sidebar("toggle");
				}
			},
			firebase: {
				tasks: tasksRef
			}
		});
	});

