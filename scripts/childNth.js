var parent = document.getElementById("centerBox");
var parent = parent.lastElementChild.textContent;
var nodes = document.getElementById("centerBox").children.length;
var h1 = "hello 1";
var h2 = "hello 2";
var h3 = "hello 3";

console.log(nodes);
function childFunc() {
	if (nodes == 1) {
		parent.style = "grid-template-columns: repeat(1, 100%);";
		console.log(h1);
	} else if (nodes == 2) {
		parent.style = "grid-template-columns: repeat(2, 50%);";
		console.log(h2);
	} else if (nodes == 3) {
		parent.style = "grid-template-columns: repeat(3, 33.33333%);";
		console.log(h3);
	}
}

// function addStyle(styleString) {
// 	const style = document.createElement("style");
// 	style.textContent = styleString;
// 	document.head.append(style);
// }

// addStyle(`
//     #centerBox {
// 		grid-template-columns: repeat(2, 100%);
//     }
// `);

// function addStyle2(styleString2) {
// 	const style = document.createElement("style");
// 	style.textContent = styleString2;
// 	document.head.append(style);
// }

// addStyle2(`
//     #centerBox {
// 		grid-template-columns: repeat(2, 50%);
//     }
// `);

// ==========================================================

// code below works 100%

// function addStyle(styleString) {
// 	const style = document.createElement("style");
// 	style.textContent = styleString;
// 	document.head.append(style);
// }

// addStyle(`
//   #child:nth-child(1) {
//     outline: 20px solid yellow;
//   }
// `);
// console.log(addStyle);

// function addStyle2(styleString2) {
// 	const style = document.createElement("style");
// 	style.textContent = styleString2;
// 	document.head.append(style);
// }

// addStyle2(`
//   #child:nth-child(2) {
//     outline: 20px solid blue;
//   }
// `);
