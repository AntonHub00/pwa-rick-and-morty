import CharactersDisplayer from "./CharacterDisplayer.js";
import CharacterFecther from "./CharacterFetcher.js";

const characterFetcher = new CharacterFecther();
const characterDisplayer = new CharactersDisplayer();

(async () => {
  for (let i = 0; i < 6; i++) {
    let characters = await characterFetcher.fetchNext();
    characterDisplayer.display(characters);
  }
})();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service worker registered"))
    .catch((error) => console.log("Service worker NOT registered", error));
}
