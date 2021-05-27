import { DOMSelectors } from "./DOM";
import { genres } from "./artDepartment";

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
        data.results.forEach((art) => {
          let artDepartmentArr = [];
          const addGenre = function () {
            genres.forEach((element) => {
              if (art.artDepartment_ids.includes(element.id)) {
                artDepartmentArr.push(element.name);
                return artDepartmentArr;
              }
            });
          };
          addGenre();

          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="art-card">
              <div class="art-card-front">
                <img
                  src="${art.primaryImage}"
                  alt="${medium}"
                  class="poster"
                />
              </div>
              <div class="art-card-back">
                <h3 class="art-card-header">${art.title}</h3> 
                <div class="date-box">
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
