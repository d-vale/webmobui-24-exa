class CategorieItem extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `<a href="#categories-${this.getAttribute('id')}">
            <img src="${this.getAttribute('icon_url')}"  class="categories__box__icon" />

            <div class="categories__box__name">${this.getAttribute('name')}</div>
            <div class="categories__box__count">${this.getAttribute('count')} éléments</div>
          </a>
      `
    }
}

customElements.define("categorie-item", CategorieItem)
