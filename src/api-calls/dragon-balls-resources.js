import { state } from "../Data/state.js";
import { Base_Url } from "../config.js";

export const dragonBallResources = async () => {
  const filterQuery = `name=${state.filter}`;
  const pageQuery = `page=${state.pagination.currentPage}&limit=${state.pagination.pageSize}`;

  const url = `${Base_Url}&${pageQuery}&${filterQuery}`;
  // const url = `${Base_Url}`;
  try {
    const data = await fetch(url);
    const response = await data.json();

    if (Array.isArray(response) === true) {
      return response;
    } else {
      return response.items;
    }
  } catch (err) {
    console.log(err);
  }
};
