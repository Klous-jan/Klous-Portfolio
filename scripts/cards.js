function flipCard() {
	var card = document.getElementById("card-flip");
	card.addEventListener("click", flipCard);
	card.classList.toggle("flipCard");
}

// ===========================================================

var cgi = document.getElementById("cgi");
var cgii = document.getElementById("cgii");
var cgiii = document.getElementById("cgiii");
var cgiv = document.getElementById("cgiv");
var cgv = document.getElementById("cgv");

var carousel = document.querySelector(".carousel");
var cellCount = 5;
var selectedIndex = 0;
// var group = document.getElementById("carousel-top");
// var activeIndex = group.getAttribute("loc");
// var indexInc = activeIndex;
// var clickCounter = 0;
var array = [1, 2, 3, 4, 5];

function rotateCarousel() {
	var angle = (selectedIndex / cellCount) * -360;
	carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
	selectedIndex = selectedIndex % array.length;
	cgi.setAttribute("loc", array[selectedIndex]);
	cgii.setAttribute("loc", array[selectedIndex] - 1);
	cgiii.setAttribute("loc", array[selectedIndex] - 2);
	cgiv.setAttribute("loc", array[selectedIndex] - 3);
	cgv.setAttribute("loc", array[selectedIndex] - 4);
	if (cgi.getAttribute("loc") == -1 || cgi.getAttribute("loc") == 3 || cgi.getAttribute("loc") == 4 || cgi.getAttribute("loc") == -2) {
		cgi.setAttribute("hidden", "");
	} else {
		cgi.removeAttribute("hidden");
	}
	if (cgii.getAttribute("loc") == -1 || cgii.getAttribute("loc") == 3 || cgii.getAttribute("loc") == 4 || cgii.getAttribute("loc") == -2) {
		cgii.setAttribute("hidden", "");
	} else {
		cgii.removeAttribute("hidden");
	}
	if (cgiii.getAttribute("loc") == -1 || cgiii.getAttribute("loc") == 3 || cgiii.getAttribute("loc") == 4 || cgiii.getAttribute("loc") == -2) {
		cgiii.setAttribute("hidden", "");
	} else {
		cgiii.removeAttribute("hidden");
	}
	if (cgiv.getAttribute("loc") == -1 || cgiv.getAttribute("loc") == 3 || cgiv.getAttribute("loc") == 4 || cgiv.getAttribute("loc") == -2) {
		cgiv.setAttribute("hidden", "");
	} else {
		cgiv.removeAttribute("hidden");
	}
	if (cgv.getAttribute("loc") == -1 || cgv.getAttribute("loc") == 3 || cgv.getAttribute("loc") == 4 || cgv.getAttribute("loc") == -2) {
		cgv.setAttribute("hidden", "");
	} else {
		cgv.removeAttribute("hidden");
	}

	// 012 210 210 521 10-3  -3 0 2 5

	// if (cgi.getAttribute("loc") !== 1) {
	// 	cgi.setAttribute("opacity", "0.1");
	// } else {
	// 	cgi.setAttribute("opacity", "1");
	// }
	// if (cgii.getAttribute("loc") !== 1) {
	// 	cgii.setAttribute("opacity", "0.1");
	// } else {
	// 	cgii.setAttribute("opacity", "1");
	// }
	// if (cgiii.getAttribute("loc") !== 1) {
	// 	cgiii.setAttribute("opacity", "0.1");
	// } else {
	// 	cgiii.setAttribute("opacity", "1");
	// }
	// if (cgiv.getAttribute("loc") !== 1) {
	// 	cgiv.setAttribute("opacity", "0.1");
	// } else {
	// 	cgiv.setAttribute("opacity", "1");
	// }
	// if (cgv.getAttribute("loc") !== 1) {
	// 	cgv.setAttribute("opacity", "0.1");
	// } else {
	// 	cgv.setAttribute("opacity", "1");
	// }
	// console.log(carousel.style.transform);
	// console.log("Current Item:", array[selectedIndex]);
}

// previous-button || LEFT BUTTON || -1
var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
	selectedIndex--;
	if (selectedIndex < 0) {
		selectedIndex = array.length - 1;
	}
	rotateCarousel();
	console.log(carousel.style.transform);
	console.log("Current Item:", array[selectedIndex]);
});

// next-button || RIGHT BUTTON || +1
var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
	selectedIndex++;
	rotateCarousel();
	console.log(carousel.style.transform);
	console.log("Current Item:", array[selectedIndex]);
});
