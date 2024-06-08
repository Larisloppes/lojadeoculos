import React from 'react';
import estilos from './Rodapemodulo.module.css'; // Use o sufixo .module.css

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <h2>Desenvolvido com React</h2>
      <p className={estilos.copyright}>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
      <p className={estilos.copyright}>Feito com <span style={{color: 'red'}}>&hearts;</span> Larissa Lopes</p>
    </footer>
  );
}
