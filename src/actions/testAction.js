const testAction = {
  test: {
    start: "test/start",
  },
}

const testActionCreator = {
  start: () => {
    return {
      type: testAction.test.start,
    }
  }
}


export {
  testAction,
  testActionCreator,
}
