import { createContext, useContext, useState } from "react";
// import "./App.css";
// import Bmi from "./components/BMICalculator/Bmi";
// import Password from "./components/Passworgenerator/Password";
// import Pratice from "./components/Pratice";
// import { QrCode } from "./components/QRcode/QrCode";
// import { Props } from "./components/props/Props";
// import { PropsChildren } from "./components/props/PropsChildren";
// import Effect from "./components/useEFFECT/Effect";
// import { Calender } from "./components/Calender/Calender";
// import Useref from "./components/UseRef/Usestate";
// import { Userefer } from "./components/UseRef/Useref";
// import FoucsRef from "./components/UseRef/FoucsRef";
// import Callback from "./components/ColorPicker/Callback";
// import { Colorpicker } from "./components/ColorPicker/Colorpicker";
// import Grandparent from "./components/useContext/Grandparent";
// import Header from "./components/useContext/Header";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import Home from "./components/useContext/Home";
// import Viewcart from "./components/useContext/Viewcart ";
import Home from "./components/TanStackReactQuery/Home";
import RegularFetch from "./components/TanStackReactQuery/RegularFetch";
import ReactueryFetch from "./components/TanStackReactQuery/ReactueryFetch";
import ReactQuerFetchByClick from "./components/TanStackReactQuery/ReactQuerFetchByClick";
import { Pogress } from "./components/progressbar/Pogress";

//export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [show,setShow]=useState(false)
  return (
    // <cartContext.Provider value={{cart,setCart}}>
    // <div className="App">
    //   <BrowserRouter>
    //     <Header cart={cart} />
    //     <div className="container">
    //       <Routes>
    //         <Route element={<Home  />} path="/" />
    //         <Route
    //           element={<Viewcart/>}
    //           path="/cart"
    //         />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </div>
    // </cartContext.Provider>
    // <Effect/>

    // TanStack react query
    // <div className="app">
    //   <BrowserRouter>
    //     <nav className="navbar">
    //       <NavLink to={""}>Home</NavLink>
    //       <NavLink to={"/regular"}>Regular Fetch</NavLink>
    //       <NavLink to={"/react-query"}>React query Fetch</NavLink>
    //       <NavLink to={"/react-click"}>Load Data By Click</NavLink>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/regular" element={<RegularFetch />} />
    //       <Route path="/react-query" element={<ReactueryFetch />} />
    //       <Route path="/react-click" element={<ReactQuerFetchByClick />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>


    <div className="container">
      {
        show?<Pogress />:""
      }

      <button onClick={()=>setShow(!show)}>Toggle Progress</button>
    </div>
  );
}

export default App;
