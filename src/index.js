import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./modules";

import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import Image_file_input from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <Image_file_input {...props} imageUploader={imageUploader} />
));

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </Provider>,
  document.getElementById("root")
);
