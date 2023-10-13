import Button from "./components/Button/Button";
import { MouseEvent } from "react";
import Input from "./components/Input/Input";

function App() {
  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button onClick={addCounter}>Small</Button>
      <Button appearance="big">Big</Button>
      <Input placeholder="" />
    </>
  );
}

export default App;
