import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Comedy: [
    {
      name: "LUDO",
      ratings: "3.5/5",
      language: "Hindi",
      plot:
        "From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal."
    },

    {
      name: "Phir Hera Pheri",
      ratings: "5/5",
      language: "Hindi",
      plot:
        "The lives of Raju, Shyam and Baburao change completely when they get cheated by a fraudster. Now, they must find another way to repay the loan they took from a dreaded gangster."
    }
  ],
  Action: [
    {
      name: "KGF",
      ratings: "4/5",
      language: "Kannada/Tamil/Telugu/Hindi/Malyalam",
      plot:
        "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia"
    },

    {
      name: "Extraction",
      ratings: "4/5",
      language: "English",
      plot:
        "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible"
    }
  ],
  Biopic: [
    {
      name: "Soorarai Pottru",
      ratings: "3.5/5",
      language: "Tamil/Telugu",
      plot:
        "Soorarai Pottru is a 2020 Indian Tamil-language drama film directed by Sudha Kongara and produced by Suriya and Guneet Monga, under their respective banners 2D Entertainment and Sikhya Entertainment. The story was conceptualised and written by Kongara."
    }
  ],
  Drama: [
    {
      name: "Angrezi medium",
      ratings: "3.5/5",
      language: "Hindi",
      plot:
        "Though Champak initially disapproves, he eventually does everything in his power while going through a series of hilarious mishaps to fulfil his daughter's dream of going to London to study further"
    },
    {
      name: "Dil Bechara",
      ratings: "3.5/5",
      language: "Hindi",
      plot:
        "While struggling to survive, Manny and Kizie, who each have a terminal illness, fall in love with each other. Thereafter, the two try to spend the rest of their days being happy and staying positive."
    }
  ]
};

var moviesGenre = Object.keys(moviesDB);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Action");

  function genreClickHandler(clickedGenre) {
    setSelectedGenre(clickedGenre);
  }

  return (
    <body>
      <div className="App">
        <header>
          <h1 class="header">
            Do Watch it...
            <span role="img" aria-label="emoji">
              👓🎥
            </span>
          </h1>
          <small>
            <p id="head-desc">
              These are some movie recommendations different to genre, that ypu
              would like to watch.
            </p>
          </small>
        </header>

        <div class="content">
          {moviesGenre.map((genre) => (
            <button
              class="genre-button"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          ))}

          <ul>
            {moviesDB[selectedGenre].map((movies) => (
              <li class="movie-details">
                <div class="movie-header">
                  <p class="movie-name">{movies.name} </p>
                  <small>
                    <strong>
                      <span class="language">Language:</span>
                    </strong>
                    <span class="language">{movies.language}</span>
                  </small>{" "}
                </div>
                <hr />
                <div class="movie-ratings">
                  <strong>ratings: </strong>
                  {movies.ratings}
                  <span role="img" aria-label="emoji">
                    ⭐
                  </span>
                  <p>
                    <strong>Story:</strong>
                    <br />
                    {movies.plot}
                  </p>
                  <span></span>{" "}
                </div>

                {/* <div class="title">{movies.title}</div>
                <div class="desc">{movies.desc} </div> */}
              </li>
            ))}
          </ul>
        </div>
        <div class="about">
          <p class="about-header">About</p>
          <hr />
          <p>
            This is movie recommendation app, helps you to choose the right
            movies to binge watch...
            <br />
            <br /> If you like this, do share with your friends and family
          </p>
        </div>
        <div class="connect">
          <p>
            <strong>Connect with me</strong>
          </p>
          <hr />
          <ul id="connect-links">
            <li>
              <a href="https://www.linkedin.com/in/ajith-v-billava-571b5318b/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ajitvbillava/">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/Ajitvbillava">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}
