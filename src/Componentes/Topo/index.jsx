import React from 'react';
import estilos from './Topomodulo.module.css';

export default function Topo() {
  return (
    <header className={estilos.header}>
      <div className={estilos.limitarSecao}>
        <img src='logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' className={estilos.img} />
        <nav>
          <a href='#produtos' className={estilos.a}>PRODUTOS</a>
          <a href='#sobre' className={estilos.a}>SOBRE</a>
          <a href='#contato' className={estilos.a}>CONTATO</a>
        </nav>
      </div>
    </header>
  );
}


