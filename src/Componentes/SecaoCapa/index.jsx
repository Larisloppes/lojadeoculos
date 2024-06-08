import React from 'react';
import styles from './SecaoCapamodulo.module.css';

export default function SecaoCapa() {
  return (
    <section className={styles.secaoCapa}>
      <div className={styles.limitarSecao}>
        <p>Preços baixos em</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
      </div>
    </section>
  )
}
