import React, { memo, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const Image_file_input = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoding] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    setLoding(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    console.log(uploaded);
    setLoding(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        type="file"
        className={styles.input}
        ref={inputRef}
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "NO FILE"}
        </button>
      )}
    </div>
  );
});

export default Image_file_input;
