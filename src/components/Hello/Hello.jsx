import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <section className={styles.hello}>
      <h2 className={styles.title}>Hello Component</h2>
      <p className={styles.text}>
        この文字が表示されたら、import と export は成功です。
      </p>
    </section>
  );
}
