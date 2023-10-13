import Button from "./components/Button/Button";
import { MouseEvent, useState } from "react";
import Input from "./components/Input/Input";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

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
      <div>
        <a href="/">Menu</a>
        <a href="/cart">Cart</a>
      </div>
      {/* здесь создадим роутер-провайдер с созданным выше роутером */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
