// URL de base du serveur
const BASE_URL = 'https://webmobui-24-exa-backend-0e9cf2cbd0e5.herokuapp.com'

const loadJson = (url) => fetch(url).then((response) => response.json())

const loadAnnonces = await loadJson(`${BASE_URL}/api/annonces`)


export {loadAnnonces};
