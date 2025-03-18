import { displaySection, activateLink } from './helpers.js'
import { displayLatestAnnonce, displayCategorieAnnonce } from './sections/annonces.js'
import { displayCategorie } from './sections/categorie.js'

const routeur = () => {
  const hash = window.location.hash || '#home'
  const hashs = hash.split('-')

  // Colorie le lien
  activateLink(hashs[0])

  switch (hashs[0]) {
    case '#latest':
      displaySection('annonces')
      displayLatestAnnonce();
      break;

    case '#categories':
      if (hashs[1]) {
        displaySection('annonces')
        displayCategorieAnnonce(hashs[1])
      } else {
        displaySection('categories')
        displayCategorie()
      }
      break;

    case '#starred':
      displaySection('annonces')
      break;

    case '#account':
      displaySection('account')
      break;
  }
}

// On veut être averti des changements
window.addEventListener('hashchange', routeur)

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur()
