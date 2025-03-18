const starClick = new CustomEvent('star_click');

class AnnonceItem extends HTMLElement {

    static observedAttributes = ['star']

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback() {
        this.render()
    }

    render() {
        const icon = this.getAttribute('star') == 'true' ? 'star' : 'star_outlined'

        this.innerHTML = `<div class="annonces__element__buttons">
              <button type="button" class="icon-button starred-button">
                <span class="material-icons">${icon}</span>
              </button>
            </div>
            <a href="#annonce-${this.getAttribute('id')}">
              <img class="annonces__element__image" src="${this.getAttribute('image_url')}" />
              <div class="annonces__element__title">${this.getAttribute('title')}</div>
              <div class="annonces__element__price">${this.getAttribute('price')}-</div>
            </a>
      `;

      this.querySelector('.starred-button').addEventListener('click', (e) => {
        e.preventDefault()
        this.dispatchEvent(starClick)
      })
      
    }
}

customElements.define("annonce-item", AnnonceItem)
