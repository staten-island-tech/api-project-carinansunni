import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

const objectIDs = [208073, 194117, 461332, 335861, 458971, 437984, 437766, 76985, 2342, 443449, 45734, 436553];
const query = async function (objectIDs) {
  objectIDs.forEach(async function (id) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      const data = await response.json();
      console.log(data);
      /* data.objectID.forEach((art) => {
        addArtDepartment();
        console.log(artDepartmentArr); */
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="art-card">
            <div class="art-card-front">
              <img
                src="${data.primaryImage}" 
                alt="${data.medium}"
                class="poster"
              />
            </div>
            <div class="art-card-back">
              <h3 class="art-card-header">${data.title}</h3> 
              <div class="date-box">
                <p class="circa-date">Date Created</p>
                <p class="circa-date">${data.objectDate}</p>
              </div>
    
              <div class="creator-box">
                <p class="creator-name">Artist/Creator</p>
                <p class="creator-name">${data.artistDisplayName}</p>
              </div>
    
              <div class="art-departments">
                 ${data.department}
              </div>
            </div>
          </div>`
      );
      // });
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  });
};

query(objectIDs);
//.......mah name is jpg
////WE"RE DOING THIS< AND I QUOTWE
//
// Array of random ids on page load. To get the objects
// Run a for each for each id and pass them into an asynchronous function n ull get a bunch of cards
// Instead of one query and getting an array of movies, it’s a bunch of queries that each return one object.
// So
// Take ids. Filter into asynchronous function. Spit onto page one by one.
// Then do search function with key wordsz
