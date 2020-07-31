import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (e) => {
      if (e.ok) {
        const resposta = await e.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar os dados:(');
    });
}

export default {
  getAllWithVideos,
};
