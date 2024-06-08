import React from 'react';
import styles from './SecaoProdutosmodulo.module.css'; // Certifique-se de que o CSS está importado corretamente

function Produtos() {
  return (
    <section className={styles['secao-produtos']}>
      <h2>Nossos produtos</h2>
      <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil. Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
      <div className={styles['container-produtos']}>
        <div className={styles['box-produto']}>
          <h4>Óculos de grau</h4>
          <img src="oculos01.png" alt="Óculos de grau" />
          <p>R$ 500,00</p>
        </div>
        <div className={styles['box-produto']}>
          <h4>Óculos transition</h4>
          <img src="oculos02.png" alt="Óculos transition" />
          <p>R$ 750,00</p>
        </div>
        <div className={styles['box-produto']}>
          <h4>Óculos de sol</h4>
          <img src="oculos03.png" alt="Óculos de sol" />
          <p>R$ 700,00</p>
        </div>
        <div className={styles['box-produto']}>
          <h4>Óculos infantil</h4>
          <img src="oculos04.png" alt="Óculos infantil" />
          <p>R$ 500,00</p>
        </div>
      </div>
      <h5 className={styles['box-produto-h5']}>Todos nossos produtos possuem:</h5>
      <ul>
        <li>Garantia de 1 ano</li>
        <li>Manutenção preventiva</li>
        <li>Descontos especiais na compra da segunda unidade</li>
        <li>Flexibilidade de pagamento</li>
      </ul>
    </section>
  );
}

export default Produtos;
