import { state } from "../Data/state.js";
import { Base_Url } from "../config.js";

export const dragonBallResources = async () => {
  const filterQuery = `name=${state.filter}`;
  const pageQuery = `page=${state.pagination.currentPage}&limit=${state.pagination.pageSize}`;

  const url = `${Base_Url}&${pageQuery}&${filterQuery}`;
  console.log(url);
  // const url = `${Base_Url}`;
  try {
    const data = await fetch(url);
    const response = await data.json();
    console.log("me");
    console.log(response);
    console.log(typeof response);
    console.log("me");
    if (Array.isArray(response) === true) {
      return response;
    } else {
      return response.items;
    }

    // console.log(state.itemsToDisplay);
  } catch (err) {
    console.log(err);
  }
};
