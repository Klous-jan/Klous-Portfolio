// let activeIndex = 0;

// const groups = document.getElementsByClassName("card-grp");

// const handleLoveClick = () => {
// 	// bump to active index
// 	const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
// 	const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
// 		nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

// 	// Active group becomes after
// 	currentGroup.dataset.status = "after";

// 	// Next group becomes active
// 	nextGroup.dataset.status = "becoming-active-from-before";

// 	setTimeout(() => {
// 		nextGroup.dataset.status = "active";
// 		activeIndex = nextIndex;
// 	});
// };

// const handleHateClick = () => {
// 	// bump to active index
// 	const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
// 	const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
// 		nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

// 	// Active group becomes after
// 	currentGroup.dataset.status = "before";

// 	// Next group becomes active
// 	nextGroup.dataset.status = "becoming-active-from-after";

// 	setTimeout(() => {
// 		nextGroup.dataset.status = "active";
// 		activeIndex = nextIndex;
// 	});
// };

function flipCard() {
	var card = document.getElementById("card-flip");
	card.addEventListener("click", flipCard);
	card.classList.toggle("flipCard");
}

// ===========================================================

var carousel = document.querySelector(".carousel");
var cellCount = 5;
var selectedIndex = 0;
var group = document.getElementById("cgz");
var activeIndex = group.getAttribute("data-index");
var indexInc = activeIndex;
console.log(indexInc);

function rotateCarousel() {
	var angle = (selectedIndex / cellCount) * -360;
	carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
}

function activeCheck() {
	if (activeIndex == 0) {
		group.setAttribute("data-index", "4");
		group.setAttribute("data-status", "unknown");
	} else if (activeIndex == 1) {
		group.setAttribute("data-index", "0");
		group.setAttribute("data-status", "active");
	} else if (activeIndex == 2) {
		group.setAttribute("data-index", "1");
		group.setAttribute("data-status", "unknown");
	} else if (activeIndex == 3) {
		group.setAttribute("data-index", "2");
		group.setAttribute("data-status", "unknown");
	} else if (activeIndex == 4) {
		group.setAttribute("data-index", "3");
		group.setAttribute("data-status", "unknown");
	}
}

// previous-button || LEFT BUTTON || -1
var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
	selectedIndex--;
	activeCheck();
	rotateCarousel();
	console.log("current index: " + indexInc);
});

// next-button || RIGHT BUTTON || +1
var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
	selectedIndex++;
	// activeIndex (0) + 1 less than or equal to cellCount.length (5) - 1
	// const nextIndex = activeIndex + 1 >= cellCount.length ? 0 : activeIndex + 1;
	// const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
	// 	nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

	// currentGroup.dataset.status = "before";
	// nextGroup.dataset.status = "becoming-active-from-after";
	// nextGroup.dataset.status = "active";
	rotateCarousel();

	// const nextIndex = activeIndex + 1 <= cellCount.length - 1 ? activeIndex - 1 : 0;
	// const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
	// 	nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

	// // Active group becomes after
	// currentGroup.dataset.status = "after";

	// // Next group becomes active
	// nextGroup.dataset.status = "becoming-active-from-before";
	// setTimeout(() => {
	// 	nextGroup.dataset.status = "unknown";
	// 	activeIndex = nextIndex;
	// });
});
