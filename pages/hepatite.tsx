import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hepatite.module.css";

const Hepatite: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.hepatite}>
      <section className={styles.hepatiteChild} />
      <h1 className={styles.hepatite1}>Hepatite</h1>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <button
        className={styles.hepatiteItem}
        onClick={onRectangleButtonClick}
      />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <p className={styles.aHepatitePode}>
        A hepatite pode ser causada por vírus das hepatites A, B, C, D e E, bem
        como por outros agentes infecciosos, substâncias tóxicas (como álcool e
        certos medicamentos) e doenças autoimunes.
      </p>
      <p className={styles.osSintomasVariam}>
        Os sintomas variam dependendo do tipo de hepatite, mas podem incluir
        fadiga, náusea, icterícia (coloração amarelada da pele e olhos), dor
        abdominal e febre.
      </p>
      <p className={styles.aTransmissoVaria}>
        A transmissão varia de acordo com o tipo de hepatite, mas pode ocorrer
        por contato com sangue contaminado, relações sexuais desprotegidas,
        consumo de água ou alimentos contaminados, entre outros.
      </p>
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <p className={styles.vacinaoParaHepatite}>
        Vacinação para hepatite A e B, práticas de higiene adequadas, uso de
        preservativos durante relações sexuais, evitar o compartilhamento de
        agulhas e seringas, e evitar o consumo de água e alimentos contaminados.
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <p className={styles.oTratamentoDaContainer}>
        <span className={styles.oTratamentoDa}>
          O tratamento da hepatite varia dependendo do tipo específico de
          hepatite, sua gravidade e se é uma infecção aguda ou crônica. Aqui
          estão algumas informações gerais sobre o tratamento da hepatite:
        </span>
      </p>
      <p className={styles.noHTratamentoContainer}>
        <span className={styles.oTratamentoDa}>
          Não há tratamento específico para a hepatite A. Geralmente, a doença é
          auto-limitada e a recuperação completa é esperada sem complicações
          graves. O tratamento visa aliviar os sintomas, como repouso,
          hidratação adequada e alívio da dor, se necessário.
        </span>
      </p>
      <p className={styles.paraInfecesAgudasContainer}>
        <span className={styles.oTratamentoDa}>
          Para infecções agudas, o tratamento geralmente envolve repouso,
          hidratação adequada e monitoramento dos sintomas.
        </span>
        <span className={styles.oTratamentoDa}>
          Para infecções crônicas, o tratamento pode envolver o uso de
          medicamentos antivirais, como entecavir ou tenofovir, para suprimir a
          replicação do vírus e reduzir o risco de complicações, como cirrose
          hepática e câncer de fígado. O tratamento crônico da hepatite B é
          geralmente prescrito por um hepatologista ou especialista em doenças
          hepáticas.
        </span>
      </p>
      <h2 className={styles.hepatiteA}>Hepatite A</h2>
      <h2 className={styles.hepatiteB}>
        <p className={styles.hepatiteDE}>Hepatite B</p>
      </h2>
      <h2 className={styles.hepatiteC}>
        <p className={styles.hepatiteDE}>Hepatite C</p>
      </h2>
      <p className={styles.oTratamentoDaContainer1}>
        <span className={styles.oTratamentoDa}>
          O tratamento da hepatite C crônica tem sido revolucionado com o
          advento dos medicamentos antivirais de ação direta (DAAs), que têm
          altas taxas de cura (superior a 95%). Esses medicamentos são altamente
          eficazes na supressão do vírus da hepatite C e podem ser prescritos
          por um hepatologista ou especialista em doenças infecciosas.
        </span>
        <span className={styles.oTratamentoDa}>
          O tratamento geralmente envolve a combinação de diferentes
          medicamentos antivirais, administrados por um período de algumas
          semanas a alguns meses, dependendo do regime de tratamento prescrito e
          da resposta do paciente.
        </span>
      </p>
      <p className={styles.noExistemTratamentosContainer}>
        <span className={styles.oTratamentoDa}>
          Não existem tratamentos específicos aprovados para hepatite D. Para
          hepatite E, a maioria das infecções é aguda e autolimitada, e o
          tratamento é principalmente de suporte para aliviar os sintomas.
        </span>
        <span className={styles.oTratamentoDa}>
          Em casos graves de hepatite E, especialmente em mulheres grávidas, o
          tratamento pode incluir internação hospitalar para monitoramento e
          suporte médico.
        </span>
        <span className={styles.oTratamentoDa}>
          É importante que o tratamento da hepatite seja supervisionado por um
          profissional de saúde qualificado, que pode avaliar a gravidade da
          infecção e determinar o melhor curso de ação para cada paciente. Além
          disso, medidas de prevenção, como vacinação contra hepatite A e B e
          práticas de segurança para evitar a transmissão do vírus, são
          fundamentais para prevenir novas infecções.
        </span>
      </p>
      <h2 className={styles.hepatiteDEContainer}>
        <p className={styles.hepatiteDE}>Hepatite D e E</p>
      </h2>
    </div>
  );
};

export default Hepatite;
