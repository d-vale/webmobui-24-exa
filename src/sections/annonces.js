import { loadAnnonces } from "../api";
import '../elements/annonce-item';

const annoncesContainer = document.querySelector("div.annonces");
const annoncesTitle = document.querySelector("#section-annonces h4")

const displayAnnonces = async () => {
    const annonces = await loadAnnonces;

    annoncesTitle.textContent = `Dernières annonces (${annonces.length})`;

    annoncesContainer.innerHTML = "";

    await annonces.forEach(el => {

        const annonce = document.createElement('annonce-item');

        annonce.setAttribute('id', el.id);
        annonce.setAttribute('image_url', el.image_url);
        annonce.setAttribute('title', el.title);
        annonce.setAttribute('price', el.price);

        annoncesContainer.append(annonce);
    });
}

export { displayAnnonces };