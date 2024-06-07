import { characterImg } from "./character-img.js";
import { characterName } from "./character-name.js";
import { characterStats } from "./character-stats.js";

export const renderCharacter = (characters) => {
  const root = document.querySelector(".container");
  root.innerHTML = "";
  const result = characters.map((character) => {
    // create character card section
    const characterCard = document.createElement("article");
    characterCard.classList.add("character-card");
    // create character image section
    const imageContainer = characterImg(character);
    characterCard.appendChild(imageContainer);

    // create character details  section
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    const nameDescription = characterName(character);
    const statsContainer = characterStats(character);

    detailsContainer.appendChild(nameDescription);
    detailsContainer.appendChild(statsContainer);
    // details Container appendChild to character card
    characterCard.appendChild(detailsContainer);
    root.appendChild(characterCard);
  });
};
