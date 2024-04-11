import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./malaria.module.css";

const Malaria: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.malaria}>
      <section className={styles.malariaChild} />
      <p className={styles.oTratamentoDaContainer}>
        <span className={styles.oTratamentoDa}>
          O tratamento da malária depende de vários fatores, incluindo a espécie
          do parasita da malária envolvido, a gravidade da infecção, a idade do
          paciente, se há condições médicas subjacentes e se o parasita é
          resistente a certos medicamentos. No entanto, o tratamento geralmente
          envolve o uso de medicamentos antimaláricos.
        </span>
        <span className={styles.oTratamentoDa}>&nbsp;</span>
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <h1 className={styles.malria}>
        <p className={styles.malria1}>Malária</p>
      </h1>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <button className={styles.malariaItem} onClick={onRectangleButtonClick} />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <p className={styles.aMalria}>
        A malária é causada por parasitas do gênero Plasmodium, transmitidos
        pela picada de mosquitos infectados do gênero Anopheles.
      </p>
      <p className={styles.osSintomasIncluem}>
        Os sintomas incluem febre, calafrios, sudorese, dor de cabeça, náusea e
        vômito, dor muscular e fadiga.
      </p>
      <p className={styles.aMalria1}>
        A malária é transmitida pela picada de mosquitos infectados do gênero
        Anopheles.
      </p>
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <p className={styles.usoDeRepelentes}>
        Uso de repelentes de insetos, dormir em áreas protegidas por redes
        mosquiteiras tratadas com inseticida, uso de medicamentos antimaláricos
        preventivos em áreas endêmicas e controle de mosquitos.
      </p>
    </div>
  );
};

export default Malaria;
