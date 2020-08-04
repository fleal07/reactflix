import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault/index'
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carrousel/index';
import Footer from '../../components/Footer/index';
import Menu from '../../components/Menu/index';
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
    <PageDefault>
      <Menu />
      {JSON.stringify(dadosIniciais)}
      {/* <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
    />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />

    <Carousel
      category={dadosIniciais.categorias[1]}
    />

    <Carousel
      category={dadosIniciais.categorias[2]}
    />

    <Carousel
      category={dadosIniciais.categorias[3]}
    />

    <Carousel
      category={dadosIniciais.categorias[4]}
    />

    <Carousel
      category={dadosIniciais.categorias[5]}
    /> */}

    </PageDefault>
  );
}

export default App;
