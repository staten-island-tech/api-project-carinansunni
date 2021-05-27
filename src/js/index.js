import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

const objectIDs = [19868, 2, 8903, 33333, 777, 100, 48, 1516, 2342, 1001];
const query = async function (objectIDs) {
  objectIDs.forEach(async function (id) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      const data = await response.json();
      data.results.forEach((art) => {
        let artDepartmentArr = [];
        const addDepartment = function () {
          departments.forEach((element) => {
            if (art.artDepartment_ids.includes(element.id)) {
              artDepartmentArr.push(element.name);
              return artDepartmentArr;
            }
          });
        };
        addArtDepartment();
        console.log(artDepartmentArr);
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
  });
};

//query ()//
//.......mah name is jpg
////WE"RE DOING THIS< AND I QUOTWE
//
// Array of random ids on page load. To get the objects
// Run a for each for each id and pass them into an asynchronous function n ull get a bunch of cards
// Instead of one query and getting an array of movies, it’s a bunch of queries that each return one object.
// So
// Take ids. Filter into asynchronous function. Spit onto page one by one.
// Then do search function with key words
