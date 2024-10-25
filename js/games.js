const apiKey = "fe23044692da44cbbbf06db66772138f";
const baseUrl = "https://api.rawg.io/api/games";

const gamesWrapper = document.getElementById("game-content");

fetch(`${baseUrl}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const games = data.results;
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            console.log(game.name);
            const gameCard = `
            <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer p-0 px-2">
            <div class="movie-item movie-item-three w-100 p-0">
            <div class="movie-poster">
                <div class="non non-00"></div>
                <div class="img w-100 rounded-3" id="gameimg">
                    <img class="img w-100 rounded-3" src="${game.background_image}" alt="">
                </div>
                <ul class="overlay-btn d-flex flex-column justify-content-center align-items-center d-none">
                    <li class="rating">
                        ${game.rating}
                        <i class="fas fa-star"></i>
                    </li>
                    <li><a href="#" class="btn btn-1">Play Now</a></li>
                    <li><a href="movie-details.html" class="btn btn-2">Details</a></li>
                </ul>
            </div>
            <div class="movie-content">
                <div class="top d-flex justify-content-between align-items-center mt-3 mx-1">
                    <div class="title d-flex align-items-center ">
                        <a href="movie-details.html" id="game_name">${game.name}</a>
                    </div>
                    <span class="date">${game.released.slice(0, 4)}</span>
                </div>
                <div class="bottom mx-1 mt-2">
                    <ul class=" d-flex justify-content-between align-items-center text-start p-0">
                        <li><span class="quality">RTX</span></li>
                        <li class="d_and_r d-flex justify-content-end align-item-center">
                            <span class="duration me-2"><i class="far fa-clock"></i> Action</span>
                            <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      `;
            gamesWrapper.innerHTML += gameCard;
        }
        let posters = document.querySelectorAll(".movie-poster");

        for (let i = 0; i < posters.length; i++) {
            posters[i].addEventListener("mouseover", function() {
                document.querySelectorAll(".non")[i].classList.remove("non-00");
                document.querySelectorAll(".non")[i].classList.add("non-11");
                document.querySelectorAll(".overlay-btn")[i].classList.remove("d-none");
            })
        }


        for (let i = 0; i < posters.length; i++) {
            posters[i].addEventListener("mouseout", function() {
                document.querySelectorAll(".non")[i].classList.remove("non-11");
                document.querySelectorAll(".non")[i].classList.add("non-00");
                document.querySelectorAll(".overlay-btn")[i].classList.add("d-none");
            })
        }
    });

let posters = document.querySelectorAll(".movie-poster");

for (let i = 0; i < posters.length; i++) {
    posters[i].addEventListener("mouseover", function() {
        document.querySelectorAll(".non")[i].classList.remove("non-00");
        document.querySelectorAll(".non")[i].classList.add("non-11");
        document.querySelectorAll(".overlay-btn")[i].classList.remove("d-none");
    })
}


for (let i = 0; i < posters.length; i++) {
    posters[i].addEventListener("mouseout", function() {
        document.querySelectorAll(".non")[i].classList.remove("non-11");
        document.querySelectorAll(".non")[i].classList.add("non-00");
        document.querySelectorAll(".overlay-btn")[i].classList.add("d-none");
    })
}