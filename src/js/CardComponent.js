export default class CardComponent {
  #cardComponentTemplateContent;

  constructor() {
    this.#cardComponentTemplateContent = document.getElementById(
      "characterCardTemplate"
    ).content;
  }

  #cloneTemplateContent() {
    return this.#cardComponentTemplateContent.cloneNode(true);
  }

  build(characterText, imgURL) {
    const cardComponent = this.#cloneTemplateContent();

    cardComponent.getElementById("characterCardText").textContent =
      characterText;

    cardComponent.getElementById("characterCardImage").src = imgURL;

    return cardComponent;
  }
}
