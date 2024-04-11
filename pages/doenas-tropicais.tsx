import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./doenas-tropicais.module.css";

const DoenasTropicais: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.doenasTropicais}>
      <section className={styles.doenasTropicaisChild} />
      <h2 className={styles.dengue}>Dengue</h2>
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <h2 className={styles.medidasPreventivas1}>Medidas preventivas</h2>
      <h1 className={styles.doenasTropicaisNegligenciad}>
        Doenças tropicais negligenciadas
      </h1>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.sintomas1}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <h2 className={styles.mtodosDeTransmisso1}>Métodos de transmissão</h2>
      <h2 className={styles.doenaDeChagas}>Doença de chagas</h2>
      <p className={styles.causadaPeloParasita}>
        É causada pelo parasita Trypanosoma cruzi, transmitido principalmente
        pelas fezes do inseto triatomíneo.
      </p>
      <p className={styles.podemIncluirFebre}>
        Podem incluir febre, inchaço da área ao redor dos olhos, fadiga, dor de
        cabeça, inchaço do abdômen e dificuldade em respirar.
      </p>
      <p className={styles.osSintomasDa}>
        Os sintomas da dengue podem variar de leves a graves e incluem febre
        alta, dores de cabeça intensas, dores musculares e articulares, erupções
        cutâneas, dor atrás dos olhos, fadiga e, em casos graves, sangramento
        grave e choque hemorrágico.
      </p>
      <p className={styles.almDaPicada}>
        Além da picada do triatomíneo, pode ser transmitida por transfusão de
        sangue contaminado, transmissão de mãe para filho durante a gravidez e
        ingestão de alimentos contaminados.
      </p>
      <p className={styles.aDengue}>
        A dengue é transmitida pela picada de mosquitos infectados do gênero
        Aedes, especialmente Aedes aegypti. Esses mosquitos se reproduzem em
        áreas onde há água parada, como recipientes de água, pneus velhos e
        recipientes descartados.
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <h2 className={styles.tratamento1}>Tratamento</h2>
      <p className={styles.oTratamentoGeralmente}>
        O tratamento geralmente envolve medicamentos antiparasitários, como
        benzonidazol ou nifurtimox.
      </p>
      <p className={styles.noHTratamento}>
        Não há tratamento específico para a dengue, mas o manejo dos sintomas é
        importante. Isso pode incluir repouso, hidratação adequada, medicamentos
        para alívio da febre e da dor (paracetamol, evitando-se medicamentos à
        base de ácido acetilsalicílico e ibuprofeno, que podem aumentar o risco
        de sangramento em casos de dengue grave), e cuidados médicos para casos
        graves, como internação hospitalar e suporte médico intensivo.
      </p>
      <p className={styles.usoDeInseticidas}>
        Uso de inseticidas para controle do vetor, melhoria das condições de
        moradia para evitar o contato com o inseto, triagem de doadores de
        sangue e medidas de higiene.
      </p>
      <p className={styles.medidasDeControle}>
        Medidas de controle de vetores, como eliminação de criadouros de
        mosquitos, uso de repelentes de insetos, uso de roupas protetoras,
        instalação de telas em janelas e portas, e educação da comunidade sobre
        medidas preventivas.
      </p>
      <h2 className={styles.causas1}>Causas</h2>
      <p className={styles.causadaPeloVrus}>
        É causada pelo vírus da dengue, que é transmitido aos seres humanos pela
        picada de mosquitos infectados do gênero Aedes, principalmente Aedes
        aegypti.
      </p>
      <button
        className={styles.doenasTropicaisItem}
        onClick={onRectangleButtonClick}
      />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
    </div>
  );
};

export default DoenasTropicais;
