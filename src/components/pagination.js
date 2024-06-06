import { state } from "../Data/state.js";
import { dragonBallResources } from "../api-calls/dragon-balls-resources.js";
import { renderCharacter } from "../components/render-character.js";

export const pagination = async () => {
  const response = await dragonBallResources();
  const totalItems = Math.ceil(58 / state.pagination.pageSize);
  state.pagination.totalPages = totalItems;
  console.log(state.pagination.totalPages);
  renderCharacter(response);
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");

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
