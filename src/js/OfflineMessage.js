export default class OfflineMessage {
  #offlineMessageElement;

  constructor() {
    this.#offlineMessageElement = document.getElementById("offlineMessage");
  }

  show() {
    this.#offlineMessageElement.hidden = false;
    console.log(this.#offlineMessageElement);
  }

  hide() {
    this.#offlineMessageElement.hidden = true;
    console.log(this.#offlineMessageElement);
  }
}
