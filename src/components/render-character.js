import { characterStats } from "./character-stats.js";

export const renderCharacter = (characters) => {
  const root = document.querySelector(".container");

  root.innerHTML = "";
  const result = characters.items.map((character) => {
    // create character card section
    const characterCard = document.createElement("article");
    characterCard.classList.add("character-card");
    // create character image section
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const characterImg = document.createElement("img");
    characterImg.src = character.image;
    characterImg.alt = character.name;
    imageContainer.appendChild(characterImg);
    characterCard.appendChild(imageContainer);

    // create character details  section
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    const nameDescription = document.createElement("div");
    nameDescription.classList.add("name-description");
    const characterName = document.createElement("h2");
    characterName.textContent = character.name;
    const raceGender = document.createElement("p");
    raceGender.textContent = `${character.race} - ${character.gender}`;
    nameDescription.appendChild(characterName);
    nameDescription.appendChild(raceGender);

    const statsContainer = characterStats(character);
    // details Container appendChild
    detailsContainer.appendChild(nameDescription);
    detailsContainer.appendChild(statsContainer);
    characterCard.appendChild(detailsContainer);
    root.appendChild(characterCard);
  });
};
