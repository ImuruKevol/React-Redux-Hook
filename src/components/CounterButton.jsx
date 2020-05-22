import React from 'react';
import { useDispatch, connect } from "react-redux";
import { testActionCreator } from "../actions/testAction";

const CounterButton = (props) => {
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //   dispatch(testActionCreator.start());
  // }
  const { onClickHandler } = props;
  
  return (
    <button onClick={onClickHandler}>
      CLICK!
    </button>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: () => {
      dispatch(testActionCreator.start())
    },
  }
}

export default connect(null, mapDispatchToProps)(CounterButton);
// export default CounterButton;
