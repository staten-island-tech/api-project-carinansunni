import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
const query = async function () {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects` //object id only, need to convert object id into another api (?) so that it'll actually spit out smth

      'https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]'  //other code needed to plug the object id into
    );
    const data = await response.json();
    data.results.forEach((movie) => {
      let genreArr = [];
      const addGenre = function () {
        genres.forEach((element) => {
          if (movie.genre_ids.includes(element.id)) {
            genreArr.push(element.name);
            return genreArr;
          }
        });
      };
      addGenre();
      console.log(genreArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
            <div class="movie-card-front">
              <img
                src="https://image.tmdb.org/t/p/w300/${object.primaryImage}"
                alt=""
                class="poster"
              />
            </div>
            <div class="movie-card-back">
              <h3 class="movie-card-header">${object.objectName}</h3>
              <div class="score-box">
                <p class="user-score">Community Score</p>
                <p class="user-score">${object.vote_average}</p>
              </div> 
              //DONT NEED VOTE AVERAGE CARINAA!! IDK HOW TO TRANSLATE VOTE AVG INTO MUSEUM ARTIFACTS !!!!!!!!!
    
              <div class="release-box">
                <p class="release-date">Released</p>
                <p class="release-date">${object.accessionYear}</p>
              </div>
    
              <div class="movie-genres">
                 ${genreArr}
              </div>
            </div>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
query();
