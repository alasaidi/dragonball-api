import { pagination } from "../components/pagination.js";

export const chooseCharacters = async () => {
  try {
    pagination();
  } catch (error) {
    console.error(error);
  }
};
