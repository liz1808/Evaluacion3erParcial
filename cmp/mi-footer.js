class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<p>
        Evaluacion; 2021
        Lizbeth Angelica Martinez Ceja.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
