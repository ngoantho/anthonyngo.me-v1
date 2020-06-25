import { h } from "preact";
import { landing_html } from "@/templates";
//import { css } from "@emotion/core"
import styles from "@/styles/Section.css";

const Landing = () => <section class={styles.landing}>{landing_html}</section>;

export default Landing;
