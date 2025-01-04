import { createContext, useContext, useState } from "react";
// import "./App.css";
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

function App() {
  return (
    <div className="App">
      {/* <Props name="Kishor Kumar" age={20} isMarried={true}/>
    <Props name="Kumar" age={20} isMarried={false}/>
    <Props name="Kumar" />
    <PropsChildren>
      <p>Para 1</p>
      <p>Para 2</p>
    </PropsChildren> */}
      {/* <QrCode /> */}
      {/* <Bmi/> */}
      {/* <Effect/> */}
      {/* <Password/> */}/{/* <Pratice/> */}
      {/* <Calender /> */}
      {/* <Useref/> */}
      {/* <Userefer/> */}
      {/* <FoucsRef/> */}
      <Colorpicker />
    </div>
  );
}

export default App;
