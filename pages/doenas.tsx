import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./doenas.module.css";

const Doenas: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/aids");
  }, [router]);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/doenas-agua");
  }, [router]);

  const onRectangleButton2Click = useCallback(() => {
    router.push("/hepatite");
  }, [router]);

  const onRectangleButton3Click = useCallback(() => {
    router.push("/malaria");
  }, [router]);

  const onRectangleButton4Click = useCallback(() => {
    router.push("/tuberculose");
  }, [router]);

  const onAidsClick = useCallback(() => {
    router.push("/aids");
  }, [router]);

  const onTuberculoseClick = useCallback(() => {
    router.push("/tuberculose");
  }, [router]);

  const onMalriaClick = useCallback(() => {
    router.push("/malaria");
  }, [router]);

  const onHepatiteClick = useCallback(() => {
    router.push("/hepatite");
  }, [router]);

  const onDoenasTransmitidasPelaClick = useCallback(() => {
    router.push("/doenas-agua");
  }, [router]);

  const onRectangleButton5Click = useCallback(() => {
    router.push("/doenas-tropicais");
  }, [router]);

  const onDoenasTropicaisNegligenciadClick = useCallback(() => {
    router.push("/doenas-tropicais");
  }, [router]);

  const onRectangleButton6Click = useCallback(() => {
    router.push("/info");
  }, [router]);

  const onSobreNsClick = useCallback(() => {
    router.push("/info");
  }, [router]);

  return (
    <div className={styles.doenas}>
      <section className={styles.doenasChild} />
      <p className={styles.prezadoUsurioAoContainer} id="Intro">
        <span className={styles.prezadoUsurio}>
          <span>Prezado usuário,</span>
        </span>
        <span className={styles.blankLine}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.blankLine}>
          <span>
            Ao utilizar este aplicativo para obter informações sobre doenças, é
            crucial lembrar que a autodiagnóstico não é suficiente para
            determinar com precisão sua condição de saúde. Se você estiver
            experimentando sintomas preocupantes ou graves, é fundamental
            procurar imediatamente um profissional de saúde qualificado ou
            dirigir-se ao hospital mais próximo.
          </span>
        </span>
        <span className={styles.blankLine}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.blankLine}>
          <span>Lembre-se:</span>
        </span>
        <ol className={styles.sintomasAlarmantesSeVocE}>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Sintomas Alarmantes: Se você estiver apresentando sintomas graves,
              como dificuldade respiratória, dor no peito, perda súbita de
              consciência, sangramento intenso ou outros sintomas graves, não
              espere - procure ajuda médica imediatamente.
            </span>
          </li>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Não Ignore Sinais: Mesmo que os sintomas pareçam leves ou comuns,
              como febre persistente, dores de cabeça intensas, náuseas
              persistentes ou erupções cutâneas inexplicáveis, é importante não
              ignorá-los. Eles podem ser indicativos de uma condição médica
              subjacente que requer atenção médica.
            </span>
          </li>
          <li>
            <span>
              Busque Orientação Profissional: Um médico qualificado é a melhor
              fonte de orientação sobre sua saúde. Eles podem realizar uma
              avaliação completa, fazer um diagnóstico correto e recomendar o
              tratamento adequado.
            </span>
          </li>
        </ol>
      </p>
      <p className={styles.seVocOuContainer} id="Outro">
        <span className={styles.blankLine}>
          <span>
            Se você ou alguém ao seu redor estiver enfrentando uma emergência
            médica, não hesite em ligar para o serviço de emergência médica pelo
            número 192 imediatamente. O tempo é essencial em situações críticas
            de saúde, e uma resposta rápida pode salvar vidas.
          </span>
        </span>
        <span className={styles.blankLine}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.blankLine}>
          <span>Quando ligar para o 192:</span>
        </span>
        <ul className={styles.emCasosDeAcidentesGraves}>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Em casos de acidentes graves, como colisões de veículos, quedas de
              altura significativa ou lesões graves.
            </span>
          </li>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Se alguém estiver inconsciente, com dificuldade respiratória ou
              parada cardíaca.
            </span>
          </li>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Em situações de overdose de drogas ou envenenamento grave.
            </span>
          </li>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>Em casos de queimaduras graves ou choque elétrico.</span>
          </li>
          <li className={styles.noIgnoreSinaisMesmoQueO}>
            <span>
              Se você ou alguém estiver enfrentando uma crise de saúde súbita e
              severa, como um derrame ou ataque cardíaco.
            </span>
          </li>
        </ul>
        <span className={styles.blankLine}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.blankLine}>
          <span>
            Lembre-se, é melhor errar do lado da precaução quando se trata de
            saúde e segurança. Os profissionais de saúde do serviço de
            emergência estão treinados para lidar com uma variedade de situações
            e podem fornecer assistência vital até que ajuda adicional chegue.
          </span>
        </span>
        <span className={styles.blankLine}>
          <span>
            Não hesite em ligar para o 192 se você achar que uma emergência
            médica está ocorrendo. Sua rápida ação pode fazer toda a diferença.
          </span>
        </span>
        <span className={styles.blankLine}>
          <span>&nbsp;</span>
        </span>
        <span className={styles.blankLine}>
          <span>Atenciosamente,</span>
        </span>
        <span className={styles.transmisade}>
          <span>Transmisaúde</span>
        </span>
      </p>
      <h1 className={styles.transmisade1}>TransmiSaúde</h1>
      <button className={styles.doenasItem} onClick={onRectangleButtonClick} />
      <button
        className={styles.doenasInner}
        onClick={onRectangleButton1Click}
      />
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButton2Click}
      />
      <button
        className={styles.doenasChild1}
        onClick={onRectangleButton3Click}
      />
      <button
        className={styles.doenasChild2}
        onClick={onRectangleButton4Click}
      />
      <button className={styles.aids} onClick={onAidsClick}>
        <p className={styles.aids1}>Aids</p>
      </button>
      <button className={styles.tuberculose} onClick={onTuberculoseClick}>
        Tuberculose
      </button>
      <button className={styles.malria} onClick={onMalriaClick}>
        Malária
      </button>
      <button className={styles.hepatite} onClick={onHepatiteClick}>
        Hepatite
      </button>
      <button
        className={styles.doenasTransmitidasPela}
        onClick={onDoenasTransmitidasPelaClick}
      >
        Doenças transmitidas pela agua
      </button>
      <h2 className={styles.doenas1}>Doenças</h2>
      <button
        className={styles.doenasChild3}
        onClick={onRectangleButton5Click}
      />
      <button
        className={styles.doenasTropicaisNegligenciad}
        onClick={onDoenasTropicaisNegligenciadClick}
      >
        Doenças tropicais negligenciadas
      </button>
      <button
        className={styles.doenasChild4}
        onClick={onRectangleButton6Click}
      />
      <button className={styles.sobreNs} onClick={onSobreNsClick}>
        Sobre nós
      </button>
    </div>
  );
};

export default Doenas;
