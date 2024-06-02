import { dragonBallResources } from "../api-calls/dragon-balls-resources.js";

export const chooseCharacters = async () => {
  const response = await dragonBallResources();
  console.log(response.items);
};
