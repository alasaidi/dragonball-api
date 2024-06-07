import { state } from "../Data/state.js";
import { dragonBallResources } from "../api-calls/dragon-balls-resources.js";
import { renderCharacter } from "./render character/render-character.js";

export const pagination = async () => {
  try {
    const response = await dragonBallResources();
    renderCharacter(response);
  } catch (err) {
    console.error(err);
  }
  const totalItems = Math.ceil(58 / state.pagination.pageSize);
  state.pagination.totalPages = totalItems;
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  //next button listener
  next.addEventListener("click", async () => {
    if (state.pagination.currentPage < state.pagination.totalPages) {
      state.pagination.currentPage += 1;
      try {
        const response = await dragonBallResources();
        renderCharacter(response);
      } catch (err) {
        console.log(err);
      }
    }
  });
  // previous button listener
  previous.addEventListener("click", async () => {
    if (state.pagination.currentPage > 1) {
      state.pagination.currentPage -= 1;

      try {
        const response = await dragonBallResources();
        renderCharacter(response);
      } catch (err) {
        console.log(err);
      }
    }
  });
};
