import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

/* const searchArea = document.getElementById("search-area");

console.log("hur");
const objectIDs = [
  208073, 194117, 461332, 335861, 458971, 437984, 437766, 76985, 2342, 443449,
  45734, 436553,
]; */

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
        console.log(data);
        /* 
        searchArea.addEventListener("keyup", (e) => {
          const searchString = e.target.value;
          const filter = objectIDs.filter((data) => {
            return (
              data.name.includes(searchString) ||
              data.ojectDate.includes(searchString) ||
              data.artistDisplayName.includes(searchString)
            );
          });
          display(filter); */

        data.objectIDs.forEach((data) => {
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
        });
        //});
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
//
