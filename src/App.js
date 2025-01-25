import { createContext, useContext, useState } from "react";
import "./App.css";
import Bmi from "./components/BMICalculator/Bmi";
import Password from "./components/Passworgenerator/Password";
import Pratice from "./components/Pratice";
import { QrCode } from "./components/QRcode/QrCode";
import { Props } from "./components/props/Props";
import { PropsChildren } from "./components/props/PropsChildren";
import Effect from "./components/useEFFECT/Effect";
import { Calender } from "./components/Calender/Calender";
import Useref from "./components/UseRef/Usestate";
import { Userefer } from "./components/UseRef/Useref";
import FoucsRef from "./components/UseRef/FoucsRef";
import Callback from "./components/ColorPicker/Callback";
import { Colorpicker } from "./components/ColorPicker/Colorpicker";
import Grandparent from "./components/useContext/Grandparent";
import Header from "./components/useContext/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/useContext/Home";
import Viewcart from "./components/useContext/Viewcart ";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route element={<Home cart={cart} setCart={setCart} />} path="/" />
            <Route
              element={<Viewcart cart={cart} setCart={setCart} />}
              path="/cart"
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
