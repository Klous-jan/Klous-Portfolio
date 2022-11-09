// Name: Generate HTML divs and Styling
//create a new term
const terms = document.createElement('h3');

//set id
terms.setAttribute("id", "test");

//add the new element to html
var body = document.querySelector('body');
body.appendChild(terms)
document.getElementsByTagName("h3")[0].innerHTML = "Welcome to Educative!";

const mainID = document.getElementById("test");
mainID.style.color = "yellow";

// requires <div id="x"></div>

//=========================================================================

// Name: Generate images based on Array Values
var m,
    urls = [],
    str = '<img src="./Images/profilePictures/Animals/1-1.png />\n <img src="./Images/profilePictures/Animals/1-1.png />\n <img src="./Images/profilePictures/Animals/1-2.png />',
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while (m = rex.exec(str)) {
    urls.push(m[1]);
}
var stringX = urls.stringify;
document.getElementById('x').innerHTML = stringX;
console.log(stringX);
console.log(urls);

document.getElementById("x").Height = "200px";
document.getElementById("x").Width = "200px";
document.getElementById("x").backgroundImage = urls[0];

//=========================================================================

var img = document.createElement("img");
var imgreg = "./Images/profilePictures/Animals/1-6.png"
console.log(imgreg);
var imgx,
    imgA = "./Images/profilePictures/",
    imgB = "Animals/",
    imgC = "1",
    imgD = "-",
    imgE = "6",
    imgF = ".png"
full = imgA + imgB + imgC + imgD + imgE + imgF;

console.log(full);
img.src = full;

var div = document.getElementById("x");
div.appendChild(img);
img.setAttribute("id", "xxx");