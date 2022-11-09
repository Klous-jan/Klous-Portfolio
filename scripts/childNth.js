// var unitsAcross = 5;
// var parent = document.getElementById("centerBox");
// var child = document.getElementById("child");
// var lastChild = parent.lastElementChild.textContent;
// var nodes = document.getElementById("centerBox").children.length;

// ==============================================================

// var h1 = "hello 1";
// var h2 = "hello 2";
// var h3 = "hello 3";
// var h4 = "hello 4";
// var h5 = "hello 5";
// var h6 = "hello 6";
// var h7 = "hello 7";
// var h8 = "hello 8";
// var h9 = "hello 9";
// var h10 = "hello 10";
// var h11 = "hello 11";
// var h12 = "hello 12";
// var h13 = "hello 13";
// var h14 = "hello 14";
// var h15 = "hello 15";

// ==============================================================

// console.log(nodes);
// console.log(unitsAcross / nodes);
// console.log(nodes / unitsAcross);
// console.log(Math.floor(nodes / unitsAcross));

// ==============================================================

// var percent = 100 / nodes;
// console.log(percent + ": logging percent");
// console.log((nodes % unitsAcross) + ": logging remainder of nodes");
// console.log(nodes);
// console.log(nodes + ": 'Nodes'");
// console.log(unitsAcross);
// console.log(unitsAcross + ":  'Units per row'");
// let NUA = nodes / unitsAcross;
// console.log(NUA);
// console.log(NUA + ":  '17/5 - Nodes / Units per row'");
// let rndDown = Math.floor(NUA);
// console.log(rndDown);
// console.log(rndDown + " nearest tenth");
// let tenth = NUA - rndDown;
// let tenFix = tenth.toFixed(1);
// console.log(tenFix);
// console.log(tenFix + ": Which? '0 / .2 / .4 / .6 / .8'");
// let onef = 1 / unitsAcross;
// let twof = 2 / unitsAcross;
// let thrf = 3 / unitsAcross;
// let fouf = 4 / unitsAcross;
// let fivf = 5 / unitsAcross - 1;
// console.log(onef);
// console.log(twof);
// console.log(thrf);
// console.log(fouf);
// console.log(fivf);

// function mathFunc() {
// 	var nodes = document.getElementById("centerBox").children.length;
// 	var unitsAcross = 5;
// 	let NUA = nodes / unitsAcross;
// 	let rndDown = Math.floor(NUA);
// 	let tenth = NUA - rndDown;
// 	let tenFix = tenth.toFixed(1);
// 	let parent = document.getElementById("centerBox");
// 	let lastchildNum = parent.childNodes.length;
// 	console.log(lastchildNum);
// 	let lastchild = parent.getElementsByTagName("div");
// 	console.log(lastchild);
// let onef = 1 / unitsAcross; // return .2
// let twof = 2 / unitsAcross; // return .4
// let thrf = 3 / unitsAcross; // return .6
// let fouf = 4 / unitsAcross; // return .8
// let fivf = 5 / unitsAcross - 1; // return 0
// 	console.log(tenFix);
// 	if (tenFix == onef) {
// 		console.log("onef: .02");
// parent.style = "grid-template-columns: repeat(" + nodes + ", 100%);";
// 		lastchildNum.style = "color: yellow";
// 	} else if (tenFix == twof) {
// 		console.log("twof: .04");
// 	} else if (tenFix == thrf) {
// 		console.log("thrf: .06");
// 	} else if (tenFix == fouf) {
// 		console.log("fouf: .08");
// 	} else if (tenFix == fivf) {
// 		console.log("fivf: 0.0");
// 	}
// }
// console.log(mathFunc() + " mathFunc");

// function childFunc() {
// 	var unitsAcross = 5;
// 	var parent = document.getElementById("centerBox");
//  var child = document.getElementById("child");
// 	var lastChild = parent.lastElementChild.textContent;
// 	var nodes = document.getElementById("centerBox").children.length;
// 	var UnitNode = nodes % unitsAcross;
// 	if (nodes == 1 && UnitNode == 1 && nodes > 5) {
// 		parent.style = "grid-template-columns: repeat(" + nodes + ", 100%);";
// 		lastChild.style = "grid-template-columns: repeat(" + nodes + ", 100%);";
// 		console.log(UnitNode + " UnitNode");
// 		console.log(h1);
// 	} else if (nodes == 2 && UnitNode == 2 && nodes > 5) {
// 		parent.style = "grid-template-columns: repeat(" + nodes + ", 50%);";
// 		lastChild.style = "grid-template-columns: repeat(" + nodes + ", 50%);";
// 		console.log(UnitNode + " UnitNode");
// 		console.log(h2);
// 	} else if (nodes == 3 && UnitNode == 3 && nodes > 5) {
// 		parent.style = "grid-template-columns: repeat(" + nodes + ", 33.333333%);";
// 		console.log(UnitNode + " UnitNode");
// 		console.log(h3);
// 	} else if (nodes == 4 && UnitNode == 4 && nodes > 5) {
// 		parent.style = "grid-template-columns: repeat(" + nodes + ", 25%);";
// 		console.log(UnitNode + " UnitNode");
// 		console.log(h4);
// 	} else if (nodes == 5 && UnitNode == 5 && nodes > 5) {
// 		parent.style = "grid-template-columns: repeat(" + nodes + ", 20%);";
// 		console.log(UnitNode + " UnitNode");
// 		console.log(h5);
// 	}
// }

// function windowSize() {
// 	var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// 	var grid = document.getElementById("grid");
// 	var gridChildNodes = grid.childNodes.length;
// 	for (var node of gridChildNodes) {
// 		console.log(node);
// 	}
// var chil = document.getElementById("child");
// var img = document.getElementById("image");
// var numChildren = document.getElementById("grid").children.length;
// console.log(numChildren);
// if (vw > 1200 && )
// }
// console.log(windowSize());

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
	var unitSpan = 5;
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
