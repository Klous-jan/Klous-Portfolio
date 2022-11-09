let results = document.getElementById('result')
var ratings = ["TV-Y", "TV-Y7", "TV-G", "TV-PG", "PG-13", "TV-14", "TV-R", "TV-MA", "NC-17"];

function range(e) {
    if (e.value == 1) {
        return results.innerHTML = ratings[0];
    } else if (e.value == 2) {
        return results.innerHTML = ratings[1];
    } else if (e.value == 3) {
        return results.innerHTML = ratings[2];
    } else if (e.value == 4) {
        return results.innerHTML = ratings[3];
    } else if (e.value == 5) {
        return results.innerHTML = ratings[4];
    } else if (e.value == 6) {
        return results.innerHTML = ratings[5];
    } else if (e.value == 7) {
        return results.innerHTML = ratings[6];
    } else if (e.value == 8) {
        return results.innerHTML = ratings[7];
    } else if (e.value == 9) {
        return results.innerHTML = ratings[8];
    }
}



// var ratings = ["", "TV-Y", "TV-Y7", "TV-G", "TV-PG", "PG-13", "TV-14", "TV-R", "TV-MA", "NC-17"];
// var val = $('#slider').slider("option", "value");

// $("#circles-slider")
//     .slider({
//         min: 0,
//         max: 10,
//         null: 0,
//         value: 1,
//         labels: ratings,
//         slide: function(event, ui) {
//             $("#slider-value").html(ui.value);
//         }
//     })
//     .slider("pips", {
//         rest: "label",
//         labels: ratings,
//     })


// .on("slidechange", function(e, ui) {
//     $("#labels-ratings-output").text("You selected " + ratings[ui.value] + " (" + ui.value + ")");
// });


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

// var span = document.getElementById("demo");

// function testthis() {
//     var fact = span.innerHTML = span.textContent;
//     return fact.innerHTML = ("runtest");
// }
// console.log(span.textContent)