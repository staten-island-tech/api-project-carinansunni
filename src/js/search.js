import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=${searchParams}`
        );
        const data = await response.json();

        data.objectIDs.forEach((art) => {
          console.log(art);
          /*  let artDepartmentArr = [];
          const addArtDepartment = function () {
            departments.forEach((element) => {
              if (art.artDepartment_ids.includes(element.id)) {
                artDepartmentArr.push(element.name);
                return artDepartmentArr;
              }
            });
          };
          addArtDepartment(); */

          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="art-card">
              <div class="art-card-front">
                <img
                  src="${art.primaryImage}" 
                  alt="${art.medium}"
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
                  <p class="creator-name">${art.artistDisplayName}</p>
                </div>
      
                <div class="art-departments">
                  
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
