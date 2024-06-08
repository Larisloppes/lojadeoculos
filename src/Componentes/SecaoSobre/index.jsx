import React from 'react';
import estilos from './SecaoSobremodulo.module.css';

export default function SecaoSobre() {
  return (
    <section id='sobre' className={estilos['secao-sobre']}>
      <div className={`limitar-secao ${estilos['container-sobre']}`}>
        <h3>QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

        <div className={estilos['box-cards']}>
          <img src='/loja.png' alt="Loja" />

          <div className={estilos['card']}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className={estilos['card']}>
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe é treinada para te atender</p>
          </div>

          <img src='/atendimento.png' alt="Atendimento" />
        </div>
      </div>
    </section>
  )
}
