import "./App.css";
import Bmi from "./components/BMICalculator/Bmi";
import { QrCode } from "./components/QRcode/QrCode";
import { Props } from "./components/props/Props";
import { PropsChildren } from "./components/props/PropsChildren";

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
<Bmi/>

    </div>
  );
}

export default App;
