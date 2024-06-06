import { state } from "../../Data/state.js";
import { pagination } from "../pagination.js";

export const filterCharacter = () => {
  const filterBtn = document.querySelector(".filterBtn");
  const paginationBtn = document.querySelector(".pagination");
  console.log(paginationBtn);
  filterBtn.addEventListener("click", () => {
    const filterValue = document.getElementById("searchValue").value;
    state.filter = filterValue;
    paginationBtn.classList.add("active");
    pagination();
    document.getElementById("searchValue").value = "";
  });
};
