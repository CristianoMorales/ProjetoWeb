import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./aids.module.css";

const Aids: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.aids}>
      <section className={styles.aidsChild} />
      <h1 className={styles.aids1}>
        <p className={styles.aids2}>Aids</p>
      </h1>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <button className={styles.aidsItem} onClick={onRectangleButtonClick} />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <p className={styles.aAidsContainer}>
        <span>{` `}</span>
        <span className={styles.aAids}>
          A AIDS é causada pelo vírus da imunodeficiência humana (HIV), que
          ataca o sistema imunológico do corpo, tornando-o vulnerável a
          infecções e doenças.
        </span>
      </p>
      <p className={styles.osSintomasDa}>
        Os sintomas da AIDS podem variar, mas incluem febre, sudorese noturna,
        perda de peso inexplicável, fadiga, gânglios linfáticos inchados e
        infecções recorrentes.
      </p>
      <p className={styles.oHivPode}>
        O HIV pode ser transmitido por meio de relações sexuais desprotegidas,
        compartilhamento de agulhas contaminadas, de mãe para filho durante a
        gravidez, parto ou amamentação, e por contato com sangue infectado.
      </p>
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <p className={styles.usarPreservativosDurante}>
        Usar preservativos durante relações sexuais, evitar o compartilhamento
        de agulhas e seringas, realizar testes regulares para o HIV, e, se
        diagnosticado, seguir o tratamento adequado para reduzir a carga viral e
        evitar a transmissão.
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <p className={styles.oTratamentoDa}>
        O tratamento da AIDS envolve o uso de medicamentos antirretrovirais
        (ARVs) para controlar a replicação do vírus da imunodeficiência humana
        (HIV) no corpo, prevenir danos ao sistema imunológico e reduzir o risco
        de transmissão do vírus para outras pessoas. Os ARVs funcionam
        interrompendo diferentes estágios do ciclo de vida do HIV. Geralmente,
        uma combinação de medicamentos é usada, conhecida como terapia
        antirretroviral altamente ativa (HAART). Essa abordagem combinada é
        eficaz em suprimir a carga viral do HIV e permitir que o sistema
        imunológico se recupere.
      </p>
    </div>
  );
};

export default Aids;
