import CharactersDisplayer from "./CharacterDisplayer.js";
import CharacterFecther from "./CharacterFetcher.js";
import OfflineMessage from "./OfflineMessage.js";

const offlineMessage = new OfflineMessage();
const characterFetcher = new CharacterFecther();
const characterDisplayer = new CharactersDisplayer();

if ("onLine" in navigator) {
  if (navigator.onLine) offlineMessage.hide();
  else offlineMessage.show();
}

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
