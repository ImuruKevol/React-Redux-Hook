import React, { useEffect } from 'react';
import { useSelector, connect } from "react-redux";
import CounterButton from './CounterButton';

const Counter = (props) => {
  // const hello = useSelector(state => state.testReducer.str);
  // const cnt = useSelector(state => state.testReducer.count);
  const { hello, cnt } = props;

  useEffect(() => {
    console.log('Counter Component up!')

    return () => {
      console.log('Counter Component down!')
    }
  }, []);

  useEffect(() => {
    console.log('count changed!')
    const tid = setTimeout(() => {
      console.log("timeout");
    }, 3000);

    return () => {
      clearTimeout(tid);
      console.log('CLEANUP: ', tid);
    }
  }, [cnt]);

  return (
    <>
      <div>{hello}</div>
      <div>{cnt}</div>
      <CounterButton />
    </>
  );
}

const mapStateToProps = (state) => {
  const { str, count } = state.testReducer;
  return {
    hello: str,
    cnt: count,
  }
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
