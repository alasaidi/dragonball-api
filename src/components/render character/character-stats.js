export const characterStats = (character) => {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  // base ki
  const baseKi = document.createElement("div");
  baseKi.classList.add("stat");
  const base = document.createElement("p");
  base.innerHTML = "Base Ki:";
  const ki = document.createElement("span");
  ki.innerHTML = character.ki;
  baseKi.appendChild(base);
  baseKi.appendChild(ki);
  statsContainer.appendChild(baseKi);
  // total ki
  const totalKi = document.createElement("div");
  totalKi.classList.add("stat");
  const total = document.createElement("p");
  total.innerHTML = "Total Ki:";
  const totKi = document.createElement("span");
  totKi.innerHTML = character.maxKi;
  totalKi.appendChild(total);
  totalKi.appendChild(totKi);
  statsContainer.appendChild(totalKi);
  //   Affiliation:
  const affiliation = document.createElement("div");
  affiliation.className = "stat";
  const affiliationZ = document.createElement("p");
  affiliationZ.textContent = "Affiliation:";
  const Fighter = document.createElement("span");
  Fighter.innerHTML = character.affiliation;
  affiliation.appendChild(affiliationZ);
  affiliation.appendChild(Fighter);

  statsContainer.appendChild(affiliation);
  return statsContainer;
};
