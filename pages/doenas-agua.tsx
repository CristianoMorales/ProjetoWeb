import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./doenas-agua.module.css";

const DoenasAgua: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.doenasAgua}>
      <div className={styles.doenasAguaChild} />
      <h2 className={styles.medidasPreventivas}>Medidas preventivas</h2>
      <h2 className={styles.causas}>Causas</h2>
      <h2 className={styles.sintomas}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso}>Métodos de transmissão</h2>
      <h2 className={styles.clera}>Cólera</h2>
      <p className={styles.causadaPelaBactria}>
        É causada pela bactéria Vibrio cholerae, geralmente encontrada em água
        ou alimentos contaminados.
      </p>
      <p className={styles.diarreiaAquosaGrave}>
        {" "}
        Diarreia aquosa grave, vômitos, desidratação, cãibras musculares e, em
        casos graves, choque e morte.
      </p>
      <p className={styles.ingestoDeGua}>
        Ingestão de água ou alimentos contaminados com as fezes de pessoas
        infectadas.
      </p>
      <h2 className={styles.tratamento}>Tratamento</h2>
      <p className={styles.reposioDeLquidos}>
        Reposição de líquidos e eletrólitos por via oral ou intravenosa, uso de
        antibióticos para casos graves e, em alguns casos, administração de
        vacina oral contra a cólera.
      </p>
      <p className={styles.fornecimentoDeGua}>
        Fornecimento de água potável segura, saneamento adequado, práticas de
        higiene pessoal, como lavagem das mãos, e educação sanitária.
      </p>
      <h1 className={styles.doenasTransmitidasPelaContainer}>
        <p className={styles.doenasTransmitidasPela}>
          Doenças transmitidas pela agua
        </p>
      </h1>
      <button
        className={styles.doenasAguaItem}
        onClick={onRectangleButtonClick}
      />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <h2 className={styles.medidasPreventivas1}>Medidas preventivas</h2>
      <h2 className={styles.causas1}>Causas</h2>
      <h2 className={styles.sintomas1}>Sintomas</h2>
      <h2 className={styles.mtodosDeTransmisso1}>Métodos de transmissão</h2>
      <h2 className={styles.febreTifide}>Febre Tifóide</h2>
      <p className={styles.causadaPelaBactria1}>
        É causada pela bactéria Salmonella typhi, geralmente presente em água ou
        alimentos contaminados.
      </p>
      <p className={styles.febreAltaDor}>
        Febre alta, dor de cabeça, fraqueza, dor abdominal, perda de apetite,
        erupção cutânea e, em casos graves, complicações como perfuração
        intestinal.
      </p>
      <p className={styles.ingestoDeGua1}>
        Ingestão de água ou alimentos contaminados com fezes de pessoas
        infectadas.
      </p>
      <h2 className={styles.tratamento1}>Tratamento</h2>
      <p className={styles.antibiticosComoCiprofloxac}>
        Antibióticos, como ciprofloxacino ou azitromicina, são frequentemente
        usados para tratar a febre tifoide.
      </p>
      <p className={styles.melhoriaDoAbastecimento}>
        Melhoria do abastecimento de água e saneamento, educação sobre higiene
        pessoal e alimentar, e vacinação contra a febre tifoide.
      </p>
    </div>
  );
};

export default DoenasAgua;
