import CharacterFecther from "./CharacterFetcher";
import CharactersDisplayer from "./CharacterDisplayer";

const characterFetcher = new CharacterFecther();
const characterDisplayer = new CharactersDisplayer();

(async () => {
  for (let i = 0; i < 6; i++) {
    let characters = await characterFetcher.fetchNext();
    characterDisplayer.display(characters);
  }
})();
