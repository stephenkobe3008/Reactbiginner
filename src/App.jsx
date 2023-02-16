import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">げんきですか</ColorfullMessage>
      <ColorfullMessage color="orange">元気です</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
