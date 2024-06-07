export const characterName = (character) => {
  const nameDescription = document.createElement("div");
  nameDescription.classList.add("name-description");
  const characterName = document.createElement("h2");
  characterName.textContent = character.name;
  const raceGender = document.createElement("p");
  raceGender.textContent = `${character.race} - ${character.gender}`;
  nameDescription.appendChild(characterName);
  nameDescription.appendChild(raceGender);
  return nameDescription;
};
