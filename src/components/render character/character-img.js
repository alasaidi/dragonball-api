export const characterImg = (character) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const characterImg = document.createElement("img");
  characterImg.src = character.image;
  characterImg.alt = character.name;
  imageContainer.appendChild(characterImg);
  return imageContainer;
};
