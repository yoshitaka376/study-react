import styles from "@/styles/Home.module.css";
import { Links } from "@/Conponents/Links";
import { Headline } from "@/Conponents/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
