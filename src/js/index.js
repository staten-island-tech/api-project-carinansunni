import { DOMSelectors } from "./DOM";
import { departments } from "./artDepartment";

const objectIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        addDepartment();
        console.log(artDepartmentArr);
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
