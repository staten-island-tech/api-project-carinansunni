import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

const key = "YOURKEYHERE";
const query = async function () {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000&vote_average.gte=8&with_watch_monetization_types=flatrate`
    );
    const data = await response.json();
    data.results.forEach((art) => {
      let artDepartmentArr = [];
      const addDepartment = function () {
        departments.forEach((element) => {
          if (movie.genre_ids.includes(element.id)) {
            artDepartmentArr.push(element.name);
            return artDepartmentArr;
          }
        });
      };
      addDepartment();
      console.log(genreArr);
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
query();
