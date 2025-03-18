import { loadAnnonces, loadAnonceCategories } from "../api";
import '../elements/annonce-item';

const annoncesContainer = document.querySelector("div.annonces");
const annoncesTitle = document.querySelector("#section-annonces h4")

const displayAnnoncesArray = (annonceArray) => {

    annoncesTitle.textContent = `Dernières annonces (${annonceArray.length})`;
    annoncesContainer.innerHTML = "";
    annonceArray.forEach(el => {

        const annonce = document.createElement('annonce-item');

        annonce.setAttribute('id', el.id);
        annonce.setAttribute('image_url', el.image_url);
        annonce.setAttribute('title', el.title);
        annonce.setAttribute('price', el.price);

        annoncesContainer.append(annonce);
    });
}

const displayLatestAnnonce = async () =>{
    const annonces = await loadAnnonces;
    displayAnnoncesArray(annonces);
}

const displayCategorieAnnonce = async (id) => {
    const annonces = await loadAnonceCategories(id)
    displayAnnoncesArray(annonces);
 }

export { displayLatestAnnonce, displayCategorieAnnonce };