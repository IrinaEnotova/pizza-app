import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("click");
        }}
      >
        BTN
      </Button>
    </>
  );
}

export default App;
