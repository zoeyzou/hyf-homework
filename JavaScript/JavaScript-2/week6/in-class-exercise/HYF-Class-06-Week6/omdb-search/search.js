function fetchJSONData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();

    req.addEventListener('load', function(data) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            const responseText = req.responseText;
            const data = JSON.parse(responseText)
            callback(data);
        } else {
            console.error('Something is probably wrong with the url');
        }
    });

    req.addEventListener('error', function() {
        console.error('Server error like timeout');
    });

    // initializes a request with an http method
    req.open("GET", url);
    // Sends the request
    req.send();
}


const form = document.querySelector('#searchForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const searchString = formData.get('searchString');

    const tbody = document.querySelector('#moviesList > tbody');
    tbody.innerHTML = '';

    const url = 'http://www.omdbapi.com/?apikey=6d847b4e&type=movie&s=' + searchString + '&page=1';

    fetchJSONData(url, data => {

        if (data.Response === 'False') {
            alert(data.Error);
            return;
        }

        for (const movie of data.Search) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            console.log(`http://www.omdbapi.com/?apikey=6d847b4e&i=${movie.imdbID}`);

            tr.innerHTML = `<td>
                                <a href="#" class="movieTitle">${movie.Title}</a>
                                <div class="movieDetails"></div>
                            </td>
                            <td>
                                <img height="150px" src="${movie.Poster}">
                            </td>`;
            
            const link = tr.querySelector('.movieTitle');
            const showArea = tr.querySelector('.movieDetails');

            link.addEventListener('click', () => {
                event.preventDefault();

                showMovieDetails(movie, showArea);
            })
        }

    });
});

function showMovieDetails(movie, showArea) {
    const url = `http://www.omdbapi.com/?apikey=6d847b4e&i=${movie.imdbID}`;
    fetchJSONData(url, movieDetails => {
        showArea.innerHTML = `
            IMDB Rating: ${movieDetails.imdbRating} <br>
            IMDB Vote Count: ${movieDetails.imdbVotes} <br>
            IMDB ID: ${movieDetails.imdbId} <br>
            Publish Year: ${movieDetails.Year} <br>
            Actors: ${movieDetails.Actors} <br>
        `;
    })
}

