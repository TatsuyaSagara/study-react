import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "../components/links.js";
import { Headline } from "@/components/headline.js";
import { Logo } from "@/components/logo.js";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Logo />
      <Links />
    </main>
  );
}
