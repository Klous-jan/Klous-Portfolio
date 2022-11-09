function CustomAlert() {
	this.render = function (dialog) {
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById("dialog-overlay");
		var dialogbox = document.getElementById("dialog-box");
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH + "px";
		dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById("dialog-box-head").innerHTML = "Are you sure you would like to delete this profile?";
		document.getElementById("dialog-box-body").innerHTML = dialog;
		document.getElementById("dialog-box-foot-D").innerHTML = '<button onclick="Alert.delete()">Delete</button>';
		document.getElementById("dialog-box-foot-C").innerHTML = '<button onclick="Alert.cancel()">Cancel</button>';
	};
	this.delete = function () {
		document.getElementById("dialog-box").style.display = "none";
		document.getElementById("dialog-overlay").style.display = "none";
		location.href = "/src/Projects/Notflicks/index.html";
	};
	this.cancel = function () {
		document.getElementById("dialog-box").style.display = "none";
		document.getElementById("dialog-overlay").style.display = "none";
	};
}
var Alert = new CustomAlert();

// function CustomAlert() {
//     this.render = function(dialog) {
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById('dialog-overlay');
//         var dialogbox = document.getElementById('dialog-box');
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH + "px";
//         dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById('dialog-box-head').innerHTML = "Acknowledge This Message";
//         document.getElementById('dialog-box-body').innerHTML = dialog;
//         document.getElementById('dialog-box-foot').innerHTML = '<button onclick="Alert.delete()">Delete</button>';
//         document.getElementById('dialog-box-foot').innerHTML = '<button onclick="Alert.cancel()">Cancel</button>';
//     }
//     this.delete = function() {
//         document.getElementById('dialog-box').style.display = "none";
//         document.getElementById('dialog-overlay').style.display = "none";
//     }
//     this.cancel = function() {
//         document.getElementById('dialog-box').style.display = "none";
//         document.getElementById('dialog-overlay').style.display = "none";
//     }

// }
// var Alert = new CustomAlert();
