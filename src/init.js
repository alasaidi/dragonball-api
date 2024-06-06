import { clearFilter } from "./components/filter/clear-filter.js";
import { filterCharacter } from "./components/filter/filter.js";
import { fetchCharacters } from "./listeners/characters.js";

fetchCharacters();
filterCharacter();
clearFilter();
