// Name: Takes user input and store in local Storage:Object

let movies = [];

function test() {
    const checked = document.querySelector('#ANEID:checked') !== null;
    if (checked == true) {
        console.log(document.getElementById('quick').innerHTML = "1");
    } else
        console.log(document.getElementById('quick').innerHTML = "0");
}

const addMovie = (event) => {
    event.preventDefault(); //to stop the form submitting
    function checkbox() {
        const checked = document.querySelector('#ANEID:checked') !== null;
        if (checked == true) {
            console.log(document.getElementById('quick').innerHTML = "1");
            return document.getElementById('quick').innerHTML = "1";
        } else
            console.log(document.getElementById('quick').innerHTML = "0");
        return document.getElementById('quick').innerHTML = "0";
    }
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value,
        pick: document.getElementById('drop').value,
        slider: document.getElementById('maturityRatingID').value,
        ANE: checkbox()
    }
    movies.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added', { movies });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(movies));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addMovie);
});