// Name: Hide Content Show Confirm Box
function toggleText() {
    setTimeout(function() {
        var x = document.getElementById("Myid");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }, 600);
    return document.getElementById('temp').innerHTML = "hello";
}