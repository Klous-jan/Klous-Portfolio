//FULLY WORKING

// let testArray = [
//     'CBN1',
//     'CBN2',
//     'CBN3',
//     'CBN4',
//     'CBN5',
// ];
// let randOne =
//     testArray[Math.ceil(Math.random() * testArray.length - 1)];
// console.log(randOne);
// let filterOne = testArray.filter(item => item !== randOne)

// let randTwo =
//     filterOne[Math.ceil(Math.random() * filterOne.length - 1)];
// console.log(randTwo);
// let filterTwo = filterOne.filter(item => item !== randTwo)

// let randThree =
//     filterTwo[Math.ceil(Math.random() * filterTwo.length - 1)];
// console.log(randThree);
// let filterThree = filterTwo.filter(item => item !== randThree)

// function injectMovie() {
//     a = document.getElementById('test')

//     a.setAttribute('class', "ms-5 " + randOne + " " + randTwo);;
// }
// injectMovie()
// console.log(filterOne);
// console.log(filterTwo);
// console.log(filterThree);

const ML1 = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&api_key=";
const ML2 = "https://api.themoviedb.org/3/discover/movie?api_key=";
const ML3 = "https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&api_key=";
const ML4 = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=";
const ML5 = "https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&api_key=";
const ML6 = "https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=";
const ML7 = "https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&api_key=";
const ML8 = "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&api_key=";
const ML9 = "https://api.themoviedb.org/3/discover/movie?with_people=287,819&api_key=";
const ML10 = "https://api.themoviedb.org/3/discover/movie?with_people=108916,7467&api_key=";
const ML11 = "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&api_key=";
const ML12 = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&api_key=";

const mlArray = [ML1, ML2, ML3, ML4, ML5, ML6, ML7, ML8, ML9, ML10, ML11, ML12]

const SS1 = "&primary_release_date.lte=2014-10-22";
const SS2 = "&sort_by=popularity.desc";
const SS3 = "&sort_by=vote_average.desc";
const SS4 = "&sort_by=popularity.desc";
const SS5 = "&sort_by=vote_average.desc";
const SS6 = "&primary_release_year=2014";
const SS7 = "&sort_by=vote_average.desc";
const SS8 = "&sort_by=revenue.desc";
const SS9 = "&sort_by=vote_average.desc";
const SS10 = "&sort_by=popularity.desc";
const SS11 = "&vote_count.gte=10";
const SS12 = "&sort_by=revenue.desc&with_cast=3896";

const ssArray = [SS1, SS2, SS3, SS4, SS5, SS6, SS7, SS8, SS9, SS10, SS11, SS12]

function randomizer() {
    //pull first element from mlArray,
    //pull first element from ssArray
    //put into index.js async function showMovieData [ " " + api_key + " "]
    //that will be CBN1

    //pull first element from mlArray,
    //pull second element from ssArray
    //put into index.js async function showMovieData [ " " + api_key + " "]
    //that will be CBN2

    //find out how to automate
}

















// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&api_key=
// https://api.themoviedb.org/3/discover/movie?api_key=
// https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&api_key=
// https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=
// https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&api_key=
// https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=
// https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&api_key=
// https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&api_key=
// https://api.themoviedb.org/3/discover/movie?with_people=287,819&api_key=
// https://api.themoviedb.org/3/discover/movie?with_people=108916,7467&api_key=
// https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&api_key=
// https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&api_key=


// &primary_release_date.lte=2014-10-22
// &sort_by=popularity.desc
// &sort_by=vote_average.desc
// &sort_by=popularity.desc
// &sort_by=vote_average.desc
// &primary_release_year=2014
// &sort_by=vote_average.desc
// &sort_by=revenue.desc
// &sort_by=vote_average.desc
// &sort_by=popularity.desc
// &vote_count.gte=10
// &sort_by=revenue.desc&with_cast=3896