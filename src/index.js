import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";
import Image_file_input from "./components/maker/editor/image_file_input/image_file_input";
import createSagaMiddleware from "redux-saga";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <Image_file_input {...props} imageUploader={imageUploader} />
));

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware // 사가 미들웨어를 적용하고
    )
  )
);
sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
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
