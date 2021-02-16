import React, { memo } from "react";
import Card_pre from "./card_pre/card_pre";
import styles from "./preview.module.css";
const Preview = memo(({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card_pre key={key} card={cards[key]} />
      ))}
    </ul>
  </section>
));

export default Preview;
