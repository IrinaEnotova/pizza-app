import Button from "./components/Button/Button";
import { MouseEvent, useState } from "react";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button onClick={addCounter}>{counter}</Button>
      <Button appearance="big">BIG</Button>
      <Input placeholder="" />
    </>
  );
}

export default App;
