import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./tuberculose.module.css";

const Tuberculose: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.tuberculose}>
      <section className={styles.tuberculoseChild} />
      <h1 className={styles.tuberculose1}>Tuberculose</h1>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <button
        className={styles.tuberculoseItem}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.div}>{`|<-`}</div>
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <p className={styles.aTuberculose}>
        A tuberculose é causada pela bactéria Mycobacterium tuberculosis, que
        geralmente afeta os pulmões, mas também pode afetar outras partes do
        corpo.
      </p>
      <p className={styles.osSintomasIncluem}>
        Os sintomas incluem tosse persistente por mais de duas semanas, febre,
        sudorese noturna, perda de peso, fadiga e dor no peito.
      </p>
      <p className={styles.aTuberculose1}>
        A tuberculose é transmitida pelo ar, quando uma pessoa infectada tosse,
        espirra ou fala, liberando bactérias no ar que podem ser inaladas por
        outras pessoas.
      </p>
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <p className={styles.vacinaoComA}>
        Vacinação com a BCG (Bacillus Calmette-Guérin) em regiões onde a TB é
        prevalente, tratamento adequado de casos ativos, diagnóstico precoce e
        tratamento de casos latentes, e medidas de controle de infecção em
        ambientes de saúde.
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <p className={styles.oTratamentoDaContainer}>
        <span className={styles.oTratamentoDa}>
          O tratamento da tuberculose geralmente envolve o uso de uma combinação
          de medicamentos antibióticos por um período de tempo prolongado. A
          duração do tratamento e os medicamentos específicos variam dependendo
          de vários fatores, incluindo a gravidade da infecção, se a tuberculose
          é resistente a medicamentos e se há condições médicas subjacentes.
        </span>
      </p>
    </div>
  );
};

export default Tuberculose;
