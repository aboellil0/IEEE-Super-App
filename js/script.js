console.log("hello world");

$(document).ready(function() {
    $("#landing").owlCarousel({
        items: 1, // Show only one item at a time
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Change slides every 5 seconds
        autoplayHoverPause: true, // Pause autoplay on hover
        loop: true, // Loop through slides
        nav: false, // Hide navigation arrows (optional)
        dots: false // Show pagination dots (optional)
    });
});

$('.gomu').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
const obj = {
    "page": 1,
    "results": [{
            "adult": false,
            "backdrop_path": "/jnE1GA7cGEfv5DJBoU2t4bZHaP4.jpg",
            "genre_ids": [
                28,
                878
            ],
            "id": 1094844,
            "original_language": "en",
            "original_title": "Ape vs. Mecha Ape",
            "overview": "Recognizing the destructive power of its captive giant Ape, the military makes its own battle-ready A.I., Mecha Ape. But its first practical test goes horribly wrong, leaving the military no choice but to release the imprisoned giant ape to stop the colossal robot before it destroys downtown Chicago.",
            "popularity": 2157.099,
            "poster_path": "https://image.tmdb.org/t/p/w200//dJaIw8OgACelojyV6YuVsOhtTLO.jpg",
            "release_date": "2023-03-24",
            "title": "Ape vs. Mecha Ape",
            "video": false,
            "vote_average": 5.444,
            "vote_count": 54
        },
        {
            "adult": false,
            "backdrop_path": "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 823464,
            "original_language": "en",
            "original_title": "Godzilla x Kong: The New Empire",
            "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
            "popularity": 2129.298,
            "poster_path": "https://image.tmdb.org/t/p/w200//tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
            "release_date": "2024-03-27",
            "title": "Godzilla x Kong: The New Empire",
            "video": false,
            "vote_average": 6.536,
            "vote_count": 877
        },
        {
            "adult": false,
            "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 1096197,
            "original_language": "en",
            "original_title": "No Way Up",
            "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
            "popularity": 1834.123,
            "poster_path": "https://image.tmdb.org/t/p/w200//hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            "release_date": "2024-01-18",
            "title": "No Way Up",
            "video": false,
            "vote_average": 6.389,
            "vote_count": 536
        },
        {
            "adult": false,
            "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 693134,
            "original_language": "en",
            "original_title": "Dune: Part Two",
            "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            "popularity": 1769.392,
            "poster_path": "https://image.tmdb.org/t/p/w200//1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            "release_date": "2024-02-27",
            "title": "Dune: Part Two",
            "video": false,
            "vote_average": 8.243,
            "vote_count": 3538
        },
        {
            "adult": false,
            "backdrop_path": "/tpiqEVTLRz2Mq7eLq5DT8jSrp71.jpg",
            "genre_ids": [
                878,
                28,
                18
            ],
            "id": 934632,
            "original_language": "en",
            "original_title": "Rebel Moon - Part Two: The Scargiver",
            "overview": "The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.",
            "popularity": 1637.068,
            "poster_path": "https://image.tmdb.org/t/p/w200//cxevDYdeFkiixRShbObdwAHBZry.jpg",
            "release_date": "2024-04-19",
            "title": "Rebel Moon - Part Two: The Scargiver",
            "video": false,
            "vote_average": 6.104,
            "vote_count": 609
        },
        {
            "adult": false,
            "backdrop_path": "/3ffPx9jqg0yj9y1KWeagT7D20CB.jpg",
            "genre_ids": [
                16,
                28,
                10751,
                35,
                14
            ],
            "id": 1011985,
            "original_language": "en",
            "original_title": "Kung Fu Panda 4",
            "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
            "popularity": 1623.436,
            "poster_path": "https://image.tmdb.org/t/p/w200//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
            "release_date": "2024-03-02",
            "title": "Kung Fu Panda 4",
            "video": false,
            "vote_average": 7.143,
            "vote_count": 1445
        },
        {
            "adult": false,
            "backdrop_path": "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
            "genre_ids": [
                27,
                9648,
                53
            ],
            "id": 1041613,
            "original_language": "en",
            "original_title": "Immaculate",
            "overview": "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
            "popularity": 1234.51,
            "poster_path": "https://image.tmdb.org/t/p/w200//fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
            "release_date": "2024-03-20",
            "title": "Immaculate",
            "video": false,
            "vote_average": 6.282,
            "vote_count": 344
        },
        {
            "adult": false,
            "backdrop_path": "/qGJASuD3fs9ZBxuEZoxCLVidVq8.jpg",
            "genre_ids": [
                12,
                28,
                18
            ],
            "id": 845111,
            "original_language": "fr",
            "original_title": "Les trois mousquetaires : Milady",
            "overview": "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.",
            "popularity": 1010.941,
            "poster_path": "https://image.tmdb.org/t/p/w200//rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
            "release_date": "2023-12-13",
            "title": "The Three Musketeers: Milady",
            "video": false,
            "vote_average": 6.559,
            "vote_count": 363
        },
        {
            "adult": false,
            "backdrop_path": "/fUC5VsQcU3m6zmYMD96R7RqPuMn.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 1105407,
            "original_language": "en",
            "original_title": "Damaged",
            "overview": "A Chicago detective travels to Scotland after an emerging serial killer’s crimes match those that he investigated five years earlier, one of which was the crime scene of his murdered girlfriend.",
            "popularity": 922.944,
            "poster_path": "https://image.tmdb.org/t/p/w200//eacWm6jPrjkpqhi4VzwqYeJWL6k.jpg",
            "release_date": "2024-04-12",
            "title": "Damaged",
            "video": false,
            "vote_average": 4.873,
            "vote_count": 59
        },
        {
            "adult": false,
            "backdrop_path": "/vTlK3chwsEToSoQJYUcJaHlNhIf.jpg",
            "genre_ids": [
                18,
                12
            ],
            "id": 618588,
            "original_language": "en",
            "original_title": "Arthur the King",
            "overview": "Over the course of ten days and 435 miles, an unbreakable bond is forged between pro adventure racer Michael Light and a scrappy street dog companion dubbed Arthur. As the team is pushed to their outer limits of endurance in the race, Arthur redefines what victory, loyalty and friendship truly mean.",
            "popularity": 881.551,
            "poster_path": "https://image.tmdb.org/t/p/w200//gxVcBc4VM0kAg9wX4HVg6KJHG46.jpg",
            "release_date": "2024-03-15",
            "title": "Arthur the King",
            "video": false,
            "vote_average": 6.845,
            "vote_count": 87
        },
        {
            "adult": false,
            "backdrop_path": "/ilK1JRbMjo4sMJtNKLOKnqRf1RH.jpg",
            "genre_ids": [
                10752,
                28,
                36
            ],
            "id": 976906,
            "original_language": "en",
            "original_title": "Spitfire Over Berlin",
            "overview": "August 1944. With the American Eighth Air Force poised to strike over Nazi Germany, British Intelligence learns that they could be flying into a deadly trap. With only hours to spare, Flight Lieutenant Edward Barnes must fly a life and death mission over Berlin in his unarmed Spitfire to obtain photographic evidence and save the lives of 1200 men.",
            "popularity": 877.321,
            "poster_path": "https://image.tmdb.org/t/p/w200//xtPPOPTad1qopK6uDe3VlYUa22o.jpg",
            "release_date": "2022-05-13",
            "title": "Spitfire Over Berlin",
            "video": false,
            "vote_average": 4.286,
            "vote_count": 14
        },
        {
            "adult": false,
            "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
            "genre_ids": [
                28,
                14
            ],
            "id": 634492,
            "original_language": "en",
            "original_title": "Madame Web",
            "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
            "popularity": 848.67,
            "poster_path": "https://image.tmdb.org/t/p/w200//rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
            "release_date": "2024-02-14",
            "title": "Madame Web",
            "video": false,
            "vote_average": 5.6,
            "vote_count": 1184
        },
        {
            "adult": false,
            "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
            "genre_ids": [
                16,
                28,
                12,
                35,
                10751
            ],
            "id": 940551,
            "original_language": "en",
            "original_title": "Migration",
            "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
            "popularity": 815.981,
            "poster_path": "https://image.tmdb.org/t/p/w200//ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            "release_date": "2023-12-06",
            "title": "Migration",
            "video": false,
            "vote_average": 7.512,
            "vote_count": 1260
        },
        {
            "adult": false,
            "backdrop_path": "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
            "genre_ids": [
                878,
                28,
                14,
                12
            ],
            "id": 601796,
            "original_language": "ko",
            "original_title": "외계+인 1부",
            "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
            "popularity": 802.506,
            "poster_path": "https://image.tmdb.org/t/p/w200//8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
            "release_date": "2022-07-20",
            "title": "Alienoid",
            "video": false,
            "vote_average": 6.781,
            "vote_count": 301
        },
        {
            "adult": false,
            "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 359410,
            "original_language": "en",
            "original_title": "Road House",
            "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
            "popularity": 757.991,
            "poster_path": "https://image.tmdb.org/t/p/w200//bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
            "release_date": "2024-03-08",
            "title": "Road House",
            "video": false,
            "vote_average": 7.016,
            "vote_count": 1640
        },
        {
            "adult": false,
            "backdrop_path": "/keVfqCMKmJ55nHzmqR2Q5K7LwJt.jpg",
            "genre_ids": [
                28,
                53,
                10752
            ],
            "id": 784651,
            "original_language": "hi",
            "original_title": "फाइटर",
            "overview": "Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.",
            "popularity": 744.596,
            "poster_path": "https://image.tmdb.org/t/p/w200//zDZowwb9GZGEctAu2PCpjiPQAMM.jpg",
            "release_date": "2024-01-24",
            "title": "Fighter",
            "video": false,
            "vote_average": 5.183,
            "vote_count": 52
        },
        {
            "adult": false,
            "backdrop_path": "/tBmJCH9llj1Q9jDOS7vGWnl7GVj.jpg",
            "genre_ids": [
                16,
                878,
                28
            ],
            "id": 1209288,
            "original_language": "en",
            "original_title": "Justice League: Crisis on Infinite Earths Part Two",
            "overview": "An endless army of shadow demons bent on the destruction of all reality swarms over our world and all parallel Earths! The only thing opposing them is the mightiest team of metahumans ever assembled. But not even the combined power of Superman, Batman, Wonder Woman, Green Lantern and all their fellow superheroes can slow down the onslaught of this invincible horde. What mysterious force is driving them? And how do the long-buried secrets of the Monitor and Supergirl threaten to crush our last defense?",
            "popularity": 738.376,
            "poster_path": "https://image.tmdb.org/t/p/w200//g8ak4QAGLZpqMs3CpnFHWWfIzJQ.jpg",
            "release_date": "2024-04-22",
            "title": "Justice League: Crisis on Infinite Earths Part Two",
            "video": false,
            "vote_average": 6.609,
            "vote_count": 45
        },
        {
            "adult": false,
            "backdrop_path": "/fypydCipcWDKDTTCoPucBsdGYXW.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 653346,
            "original_language": "en",
            "original_title": "Kingdom of the Planet of the Apes",
            "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
            "popularity": 705.871,
            "poster_path": "https://image.tmdb.org/t/p/w200//gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
            "release_date": "2024-05-08",
            "title": "Kingdom of the Planet of the Apes",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg",
            "genre_ids": [
                878,
                9648,
                53
            ],
            "id": 720321,
            "original_language": "en",
            "original_title": "Breathe",
            "overview": "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated haven.",
            "popularity": 681.492,
            "poster_path": "https://image.tmdb.org/t/p/w200//wTW2t8ocWDlHns8I7vQxuqkyK58.jpg",
            "release_date": "2024-04-04",
            "title": "Breathe",
            "video": false,
            "vote_average": 4.975,
            "vote_count": 61
        },

    ],
    "total_pages": 43929,
    "total_results": 878575
}


let x = obj.results

function display(x) {
    var cartona = "";

    for (var i = 0; i < x.length; i++) {
        cartona += `
             <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer p-0 px-2" id="poster-${i}">
                <div class="movie-item movie-item-three w-100 p-0">
                    <div class="movie-poster">
                        <div class="non non-${i} non-00"></div>
                        <div class="img w-100 rounded-3" id="gameimg">
                            <img class="img w-100 rounded-3" src="${x[i].poster_path}" alt="">
                        </div>
                        <ul class="overlay-btn d-flex flex-column justify-content-center align-items-center d-none">
                            <li class="rating">
                                ${(x[i].vote_average).toFixed(2)}
                                <i class="fas fa-star"></i>
                            </li>
                            <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="btn btn-1">Watch Now</a></li>
                            <li><a href="movie-details.html" class="btn btn-2">Details</a></li>
                        </ul>
                    </div>
                    <div class="movie-content">
                        <div class="top d-flex justify-content-between align-items-center mt-3 mx-1">
                            <div class="title d-flex align-items-center ">
                                <a href="movie-details.html" id="game_name">${x[i].original_title}</a>
                            </div>
                            <span class="date">2021</span>
                        </div>
                        <div class="bottom mx-1 mt-2">
                            <ul class=" d-flex justify-content-between align-items-center text-start p-0">
                                <li><span class="quality">${x[i].original_language}</span></li>
                                <li class="d_and_r d-flex justify-content-end align-item-center">
                                    <span class="duration me-2"><i class="far fa-clock"></i> Action</span>
                                    <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
             `

    }



    document.getElementById("content").innerHTML = cartona;
}
display(x);

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


//games






///