import { loadCategories } from "../api";
import '../elements/categorie-item';

const categorieContainer = document.querySelector("div.categories");

const displayCategorie = async () => {
    const categories = await loadCategories;

    categorieContainer.innerHTML = "";

    categories.forEach(el => {
        const categorie = document.createElement('categorie-item');

        categorie.setAttribute('id', el.id);
        categorie.setAttribute('icon_url', el.icon_url);
        categorie.setAttribute('name', el.name);
        categorie.setAttribute('count', el.count);

        categorieContainer.append(categorie);
    });

}

export { displayCategorie };