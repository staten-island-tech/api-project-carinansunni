import { DOMSelectors } from "./DOM";
import { genres } from "./artDepartment";
const key = "73e396357001f6d2f7ae92f73e5a8c1e";
const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchParams}&page=1&include_adult=false`
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

          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="art-card">
              <div class="art-card-front">
                <img
                  src="https://images.metmuseum.org/CRDImages/as/w300/${art.primaryImage}.jpg"
                  alt=""
                  class="poster"
                />
              </div>
              <div class="art-card-back">
                <h3 class="art-card-header">${art.title}</h3> 
                <div class="score-box">
                  <p class="circa-date">Date Created</p>
                  <p class="circa-date">${art.objectDate}</p>
                </div>
      
                <div class="creator-box">
                  <p class="creator-name">Artist/Creator</p>
                  <p class="creator-name">${art.name}</p>
                </div>
      
                <div class="art-departments">
                   ${artDepartmentArr}
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
    searchQuery();
  });
};

listen();
//listennnnn//////////
////////////////fearmakescompanionsofusallllllllllllllll//dooweeedooooooowhatdoidoooooooolalalalduahudhuhdadadadaddadaaaadduhduhdudhudhhadooweeeeyooooooowawaaaaawawawaaaaa
