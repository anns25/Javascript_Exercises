let movies = [{
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3
},
{
    title: "The Godfather",
    genre: "Drama",
    rating: 9.2
},
{
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0
},
{
    title: "The Pulp Fiction",
    genre: "Crime",
    rating: 8.9
}];

let row = [];

const tableBody = document.getElementById("tableBody");
const title = document.getElementById('updateTitle');
const genre = document.getElementById('updateGenre');
const rating = document.getElementById('updateRating');
const addTitle = document.getElementById('addTitle');
const addGenre = document.getElementById('addGenre');
const addRating = document.getElementById('addRating');
const formContainer = document.getElementById("updateFormContainer");
const add = document.getElementById('add');

let currentUpdateIndex = null;

// DISPLAY TABLE

function displayTable() {
    tableBody.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        row[i] = document.createElement("tr");
        row[i].innerHTML = `<td>${movies[i].title}</td><td>${movies[i].genre}</td><td>${movies[i].rating}</td><td class="d-flex justify-content-around">                                
                                <button class="btn btn-sm btn-success me-2" id="up-${i}">Update</button>
                                <button class="btn btn-sm btn-danger" id="del-${i}">Delete</button>
                            </td>`;
        tableBody.appendChild(row[i]);

    }




    // DELETE MOVIE


    for (let i = 0; i < movies.length; i++) {
        const del = document.getElementById(`del-${i}`);
        del.addEventListener('click', () => {
            movies.splice(i, 1);
            displayTable();
        });

        const up = document.getElementById(`up-${i}`);
        up.addEventListener('click', () => {
            formContainer.classList.remove('d-none');
            title.value = movies[i].title;
            genre.value = movies[i].genre;
            rating.value = movies[i].rating;
            currentUpdateIndex = i;
        });
    }
}

// UPDATE MOVIE

// for (let i = 0; i < movies.length; i++) {
//     const up = document.getElementById(`up-${i}`);
//     up.addEventListener('click', () => {
//         formContainer.classList.remove('d-none');
//         title.value = movies[i].title;
//         genre.value = movies[i].genre;
//         rating.value = movies[i].rating;
//         currentUpdateIndex = i;


//     });
// }


// SUBMIT UPDATE

const change = document.getElementById("save-change");
change.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentUpdateIndex !== null) {
        movies[currentUpdateIndex].title = title.value;
        movies[currentUpdateIndex].genre = genre.value;
        movies[currentUpdateIndex].rating = rating.value;
        displayTable();
        console.log(movies);
    }
    console.log(movies);
    // ✅ Hide the form
    formContainer.classList.add('d-none');
});

// ADD MOVIE

add.addEventListener('click', (event) => {
   event.preventDefault();
    movies.push({
        title : addTitle.value,
        genre : addGenre.value,
        rating : addRating.value

    }) ;

    addTitle.value ="";
    addRating.value="";
    addGenre.value="";

    displayTable();
    console.log(movies);


});

console.log(movies);
displayTable();
