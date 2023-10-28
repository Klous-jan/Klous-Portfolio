var tele = document.querySelector("#cNum");
tele.addEventListener("keyup", function (e) {
	if (event.key != "Backspace" && (tele.value.length === 3 || tele.value.length === 7)) {
		tele.value += "-";
	}
});
