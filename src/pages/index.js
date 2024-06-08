import React from 'react';
import Topo from '../Componentes/Topo';
import SecaoCapa from '../Componentes/SecaoCapa';
import SecaoSobre from '../Componentes/SecaoSobre';
import SecaoProdutos from '../Componentes/SecaoProdutos';
import SecaoContato from '../Componentes/SecaoContato';
import Rodape from '../Componentes/Rodape';
import styles from '../estilo/home.module.css'; // Certifique-se de usar `styles` ao invés de `home`

const HomePage = () => {
  return (
    <div className={styles.main}> {/* Use a classe CSS principal */}
      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
      <Rodape />
    </div>
  );
};

export default HomePage;
