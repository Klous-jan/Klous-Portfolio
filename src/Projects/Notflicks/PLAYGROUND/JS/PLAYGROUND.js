// var m,
//     urls = [],
//     str = '<img src="./Images/profilePictures/Animals/1-1.png />\n <img src="./Images/profilePictures/Animals/1-1.png />\n <img src="./Images/profilePictures/Animals/1-2.png />',
//     rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

// while (m = rex.exec(str)) {
//     urls.push(m[1]);
// }
// var stringX = urls.stringify;
// document.getElementById('x').innerHTML = stringX;
// console.log(stringX);
// console.log(urls);

// document.getElementById("x").Height = "200px";
// document.getElementById("x").Width = "200px";
// document.getElementById("x").backgroundImage = urls[0];

var img = document.createElement("img");
var imgreg = "./Images/profilePictures/Animals/1-6.png"
console.log(imgreg);
var imgx,
    imgA = "./Images/profilePictures/",
    imgB = "Animals/",
    imgC = "1",
    imgD = "-",
    imgE = "2",
    imgF = ".png"
full = imgA + imgB + imgC + imgD + imgE + imgF;

console.log(full);
img.src = full;

var tarx = document.getElementById("x");
tarx.appendChild(img);
img.setAttribute("id", "general-style");
const idStyle = document.getElementById("general-style");
idStyle.style.border = "1px solid yellow";
idStyle.style.borderRadius = "10%";
idStyle.style.height = "10vw";
idStyle.style.minHeight = "100px";
idStyle.style.overflow = "hidden";