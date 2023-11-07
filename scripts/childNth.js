function windowListen() {
	window.addEventListener("resize", function (event) {
		var addEvent = function (object, type, callback) {
			if (object == null || typeof object == "undefined") return;
			if (object.addEventListener) {
				object.addEventListener(type, callback, false);
			} else if (object.attachEvent) {
				object.attachEvent("on" + type, callback);
			} else {
				object["on" + type] = callback;
			}
		};
	});
}

function windowSize() {
	windowListen();
	var unitSpan = 2;
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	const child = document.getElementById("child");
	const img = document.getElementById("image");
	const grid = document.getElementById("grid");
	const nodes = document.getElementById("grid").children.length;

	if (vw >= 1350 && nodes <= unitSpan) {
		grid.style = "grid-template-columns: repeat(" + nodes + ", 1fr)";
	} else if (vw >= 1350 && nodes > unitSpan) {
		grid.style = "grid-template-columns: repeat(5, 1fr)";
	} else if (vw <= 1349 && vw >= 1120 && nodes <= unitSpan - 1) {
		grid.style = "grid-template-columns: repeat(" + nodes + ", 1fr)";
	} else if (vw <= 1349 && vw >= 1120 && nodes > unitSpan) {
		grid.style = "grid-template-columns: repeat(4, 1fr)";
	} else if (vw <= 1119 && vw >= 850 && nodes <= unitSpan - 2) {
		grid.style = "grid-template-columns: repeat(" + nodes + ", 1fr)";
	} else if (vw <= 1119 && vw >= 850 && nodes > unitSpan) {
		grid.style = "grid-template-columns: repeat(3, 1fr)";
	} else if (vw <= 849 && vw >= 570 && nodes <= unitSpan - 3) {
		grid.style = "grid-template-columns: repeat(" + nodes + ", 1fr)";
	} else if (vw <= 849 && vw >= 570 && nodes > unitSpan) {
		grid.style = "grid-template-columns: repeat(2, 1fr)";
	} else if (vw <= 569 && vw >= 1 && nodes <= unitSpan - 4) {
		grid.style = "grid-template-columns: repeat(1, 1fr)";
	} else if (vw <= 569 && vw >= 1 && nodes > unitSpan) {
		grid.style = "grid-template-columns: repeat(1, 1fr)";
	}
	console.log(window.innerWidth);
}
