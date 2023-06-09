
class NotFoundDialog extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['title', 'message', 'target'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  get title() {
    return this.getAttribute("title") || '';
  }

  get message() {
    return this.getAttribute("message") || '';
  }

  get target() {
    return this.getAttribute("target") || '';
  }

  render() {
    const title = this.title;
    const message = this.message;
    const target = this.target;
    const values = {
      title,
      message,
      target,
    }
    const basePath = window?.hlx?.codeBasePath || '/src'
    fetch(`${basePath}/components/custom/not-found/not-found.html`, { cache: 'reload' })
      .then(response => {
        return response.text();
      })
      .then(markup => {
        this.innerHTML = Object.keys(values).reduce((acc, key) => {
          const value = values[key];
          const re = new RegExp(`\\$${key}`, 'g');
          return acc.replace(re, value);
        }, markup);
      })
      ;
  }
}

// title="title" message="sample text"

export async function prepareComponent() {
  customElements.define("not-found-dialog", NotFoundDialog);
}

export default {
  prepareComponent,
};

