import { useState } from "react";
import "./App.css";
import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";
export default function App()
{
  const [calVal,setCalVal] = useState("");
  const onClickButton= (buttonText) =>{
    if(buttonText==='C'){
     setCalVal("");
    }
    else if(buttonText === '=')
    {
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return(
    <div className="calculator">
      <Display calValue = {calVal}></Display>
      <Buttoncontainer onClickButton={onClickButton}></Buttoncontainer>
    </div>
  );
}