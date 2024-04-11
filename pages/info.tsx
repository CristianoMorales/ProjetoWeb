import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./info.module.css";

const Info: NextPage = () => {
  const router = useRouter();

  const onRectangleIconClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.info}>
      <div className={styles.infoChild} />
      <p className={styles.sobreNsContainer}>
        <span className={styles.sobreNsTransmisade}>
          <span>Sobre Nós - TransmiSaúde</span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>
            Bem-vindo ao TransmiSaúde, seu aplicativo confiável para informações
            abrangentes sobre doenças, abordando causas, sintomas, métodos de
            transmissão, medidas preventivas e tratamentos. Nosso objetivo é
            capacitar indivíduos com conhecimento de saúde acessível e
            confiável, promovendo a prevenção, o autocuidado e a busca por
            assistência médica quando necessário.
          </span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>
            Missão: Nosso compromisso é fornecer informações precisas e
            atualizadas sobre uma ampla variedade de doenças, abordando não
            apenas os sintomas, mas também as causas subjacentes, os métodos de
            transmissão e as medidas preventivas. Acreditamos que o conhecimento
            é a primeira linha de defesa contra doenças e que educar as pessoas
            sobre saúde pode ajudar a salvar vidas.
          </span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>O que oferecemos:</span>
        </span>
        <ul className={styles.informaesAbrangentesNosso}>
          <li className={styles.facilidadeDeUsoNavegueFac}>
            <span>
              Informações abrangentes: Nosso aplicativo oferece informações
              detalhadas sobre uma variedade de doenças, desde as mais comuns
              até as menos conhecidas.
            </span>
          </li>
          <li className={styles.facilidadeDeUsoNavegueFac}>
            <span>
              Facilidade de uso: Navegue facilmente pelo nosso aplicativo para
              encontrar informações relevantes sobre sintomas, métodos de
              transmissão, medidas preventivas e tratamentos para diferentes
              condições de saúde.
            </span>
          </li>
          <li className={styles.facilidadeDeUsoNavegueFac}>
            <span>
              Atualizações regulares: Nosso conteúdo é revisado e atualizado
              regularmente para garantir que você tenha acesso às informações
              mais recentes e precisas sobre saúde.
            </span>
          </li>
          <li className={styles.facilidadeDeUsoNavegueFac}>
            <span>
              Linguagem acessível: Apresentamos informações complexas de maneira
              clara e acessível, tornando mais fácil para todos compreenderem e
              aplicarem as medidas preventivas em suas vidas diárias.
            </span>
          </li>
        </ul>
        <span className={styles.sobreNsTransmisade}>
          <span>
            Nossa Visão: Visualizamos um mundo onde todas as pessoas têm acesso
            a informações de saúde confiáveis e compreensíveis, capacitando-as a
            tomar decisões informadas sobre sua saúde e bem-estar. Acreditamos
            que, ao fornecer informações precisas e acessíveis, podemos ajudar a
            prevenir doenças e promover uma comunidade mais saudável e
            resiliente.
          </span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>Junte-se a nós na jornada para uma vida mais saudável!</span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>
            O TransmiSaúde está aqui para capacitá-lo com conhecimento de saúde
            confiável e acessível. Baixe nosso aplicativo hoje e comece sua
            jornada em direção a uma vida mais saudável e informada!
          </span>
        </span>
        <span className={styles.sobreNsTransmisade}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.transmisade}>
          <span>TransmiSaúde</span>
        </span>
      </p>
      <img
        className={styles.infoItem}
        alt=""
        src="/rectangle-10.svg"
        onClick={onRectangleIconClick}
      />
      <button className={styles.button} onClick={onButtonClick}>{`|<-`}</button>
      <div className={styles.sobreNs}>Sobre nós</div>
    </div>
  );
};

export default Info;
