import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    // Fazer tratamento de erro - await respostaServidor
    throw new Error('Não foi possível pegar os dados: (');
  });

export default {
  getAllWithVideos,
};
