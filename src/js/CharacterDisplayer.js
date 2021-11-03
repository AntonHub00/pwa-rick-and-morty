import CardComponent from "./CardComponent.js";

export default class CharactersDisplayer {
  #cardsContainer;
  #cardComponent;

  constructor() {
    this.#cardsContainer = document.getElementById("cardsContainer");
    this.#cardComponent = new CardComponent();
  }

  display(characters) {
    const cardsFragment = new DocumentFragment();

    characters.forEach((character) => {
      const characterElement = this.#cardComponent.build(
        character.text,
        character.imageURL
      );

      cardsFragment.appendChild(characterElement);
    });

    this.#cardsContainer.appendChild(cardsFragment);
  }
}
