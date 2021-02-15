import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/counter/counter";
import { decrement, increment, setDiff } from "../modules/counter";

const CounterContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // 최적화 방법으로 비구조화 할당 1.
  // const { number, diff } = useSelector((state) => state.counter);
  // 최적화 방법 2 shallowEqual으로 이전의 값과 비교
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들
  const onIncrease = () => dispatch(increment());
  const onDecrease = () => dispatch(decrement());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      // 상태
      number={number}
      diff={diff}
      // 액션
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
