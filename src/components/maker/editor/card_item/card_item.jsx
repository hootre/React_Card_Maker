import React, { memo, useRef } from "react";
import Button from "../../../button/button";
import styles from "./card_item.module.css";

const Card_item = memo(({ FileInput, card, updateCard, deleteCard }) => {
  console.log("card_form");
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = (e) => {
    if (e.target == null) {
      return;
    }
    updateCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <article className={styles.card}>
      <form action="" className={styles.form}>
        <ul className={styles.list_box}>
          <li className={styles.list}>
            <input
              ref={nameRef}
              type="text"
              name="name"
              defaultValue={name}
              onChange={onChange}
            />
            <input
              ref={companyRef}
              type="text"
              name="company"
              defaultValue={company}
              onChange={onChange}
            />
            <select
              ref={themeRef}
              name="theme"
              defaultValue={theme}
              onChange={onChange}
            >
              <option value="dark">dark</option>
              <option value="light">light</option>
              <option value="colorful">colorful</option>
            </select>
          </li>
          <li className={styles.list}>
            <input
              ref={titleRef}
              type="text"
              name="title"
              defaultValue={title}
              onChange={onChange}
            />
            <input
              ref={emailRef}
              type="text"
              name="email"
              defaultValue={email}
              onChange={onChange}
            />
          </li>
          <li className={styles.list}>
            <textarea
              ref={messageRef}
              name="message"
              defaultValue={message}
              className={styles.textarea}
              onChange={onChange}
            />
          </li>
          <li className={styles.list}>
            <FileInput name={fileName} onFileChange={onFileChange} />
            <Button name="Delete" onClick={onSubmit} />
          </li>
        </ul>
      </form>
    </article>
  );
});

export default Card_item;
