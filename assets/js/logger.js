function showLogger(reducer) {
  return (prevState, action, args) => {
    console.group(action);
    console.log("Prev State:", prevState);
    console.log("Action Argument:", args);
    const netState = reducer(prevState, action, args);
    console.log("Next State:", netState);
    console.groupEnd(action);
    return netState;
  };
}export default showLogger
