import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos from "./todos";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  todos,
});
export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
export default rootReducer;
