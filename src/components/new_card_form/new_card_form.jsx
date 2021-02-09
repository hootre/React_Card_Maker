import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./new_card_form.module.css";

const New_card_form = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <article className={styles.card}>
      <form ref={formRef} action="" className={styles.form}>
        <ul className={styles.list_box}>
          <li className={styles.list}>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="name..."
            />
            <input
              ref={companyRef}
              type="text"
              name="company"
              placeholder="company..."
            />
            <select ref={themeRef} name="theme">
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
              placeholder="title..."
            />
            <input
              ref={emailRef}
              type="text"
              name="email"
              placeholder="email..."
            />
          </li>
          <li className={styles.list}>
            <textarea
              ref={messageRef}
              name="message"
              className={styles.textarea}
              placeholder="message..."
            />
          </li>
          <li className={styles.list}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
            <Button name="ADD" onClick={onSubmit} />
          </li>
        </ul>
      </form>
    </article>
  );
});

export default New_card_form;
