import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Menu: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  const onEntrarClick = useCallback(() => {
    router.push("/doenas");
  }, [router]);

  return (
    <div className={styles.menu}>
      <section className={styles.menuChild} />
      <h1 className={styles.transmisade}>
        <p className={styles.transmisade1}>TransmiSaúde</p>
      </h1>
      <button className={styles.menuItem} onClick={onRectangleButtonClick} />
      <button className={styles.entrar} onClick={onEntrarClick}>
        Entrar
      </button>
    </div>
  );
};

export default Menu;
