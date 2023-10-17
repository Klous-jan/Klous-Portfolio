function flipCard() {
	var card = document.getElementById("card-flip");
	card.addEventListener("click", flipCard);
	card.classList.toggle("flipCard");
}

// ===========================================================

var cgi = document.getElementById("cgi"),
	cgii = document.getElementById("cgii"),
	cgiii = document.getElementById("cgiii"),
	cgiv = document.getElementById("cgiv"),
	cgv = document.getElementById("cgv");

var carousel = document.querySelector(".carousel"),
	cellCount = 5,
	selectedIndex = 0,
	array = [1, 2, 3, 4, 5];

function rotateCarousel() {
	selectedIndex = selectedIndex % array.length;
	console.log(array.length);
	deg = -360;
	angleRotate = deg / array.length;
	angle = (selectedIndex / cellCount) * deg;
	// carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
	carousel.style.transform = "rotateY(" + angle + "deg)";
	// hiding background cards
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
