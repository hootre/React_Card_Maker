import React from "react";
import Button from "../button/button";
import New_card_form from "../new_card_form/new_card_form";
import Card_item from "./card_item/card_item";
import styles from "./editor.module.css";
const Editor = ({ FileInput, cards, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>NEW Card Maker</h1>
      <New_card_form FileInput={FileInput} onAdd={updateCard} />
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <Card_item
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
    </section>
  );
};

export default Editor;
