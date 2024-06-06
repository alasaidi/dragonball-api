import { state } from "../../Data/state.js";
import { pagination } from "../pagination.js";

export const clearFilter = () => {
  const clearBtn = document.querySelector(".clearBtn");
  const paginationBtn = document.querySelector(".pagination");
  clearBtn.addEventListener("click", () => {
    document.getElementById("searchValue").value = "";
    paginationBtn.classList.remove("active");

    state.filter = "";
    pagination();
  });
};
