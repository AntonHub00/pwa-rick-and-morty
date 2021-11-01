export default class CharacterFetcher {
  #baseURL;
  #nextPageURL;

  constructor() {
    this.#baseURL = "https://rickandmortyapi.com/api/character?page=1";
    this.#nextPageURL = this.#baseURL;
  }

  async fetchNext() {
    if (this.#nextPageURL == null) throw new Error("No next page available");

    const response = await fetch(this.#nextPageURL);
    const responseJSON = await response.json();
    const nextCharactersRaw = responseJSON.results;

    const nextCharacters = nextCharactersRaw.map((character) => ({
      text: character.name,
      imageURL: character.image,
    }));

    this.#nextPageURL = responseJSON.info.next;

    return nextCharacters;
  }
}
