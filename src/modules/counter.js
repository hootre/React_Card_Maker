// 액션 타입 만들기
// Ducks 패턴을 따를 댄 액션의 이름에 접두사를 넣어주세요
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있다.
const SET_DIFF = "counter/SET_DIFF";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성함수 만들기
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 초기 상태 선언
const initialState = {
  number: 0,
  diff: 1,
};

// 리듀서 선언
// 리듀서는 export default로 내보낸다
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREMENT:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}