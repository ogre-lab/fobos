
/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  /*
  const cfg = readBlockConfig(block);
  console.log(cfg)
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }
  // */
}

class NotFoundDialog extends HTMLElement {
    constructor() {
      super();
      this.appendChild()
    }

    loadData() {
        const basePath = window?.hlx?.codeBasePath || '/src' 
        fetch(`${basePath}/components/custom/not-found.html`, { cache: 'reload' })
    }
  }

customElements.define("not-found-dialogt", NotFoundDialog, { extends: "p" });

