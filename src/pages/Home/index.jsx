import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault/index';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carrousel/index';
import categoriasRepository from '../../repositories/categorias';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // Rotina que chama todos os videos das suas categorias
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => setDadosIniciais(categoriasComVideo))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default App;
