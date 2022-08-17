import { useState } from "react";
import { Box } from "../components/inputbox";
import { Button } from "../components/inputbutton";
import { Output } from "../components/output";

export const Calculator = () => {
  let [val, setval] = useState("");

  const putvalue = (event) => {
    setval(val + event.target.value);
  };
  const calc = () => {
    setval(eval(val));
  };
  const clr = () => {
    setval("");
  };
  const typevalue = (event) =>{
    setval(event.target.value);
  };

  return (
    <div className="content">
        <Output txt="CALCULATOR"/>
      <Box val={val} clk={typevalue} />
      <br />
      <br/>
      <Button val="9" clk={putvalue} />
      &nbsp;
      <Button val="8" clk={putvalue} />
      &nbsp;
      <Button val="7" clk={putvalue} />
      &nbsp;
      <Button val="+" clk={putvalue} />
      <br />
      <Button val="6" clk={putvalue} />
      &nbsp;
      <Button val="5" clk={putvalue} />
      &nbsp;
      <Button val="4" clk={putvalue} />
      &nbsp;
      <Button val="-" clk={putvalue} />
      <br />
      <Button val="3" clk={putvalue} />
      &nbsp;
      <Button val="2" clk={putvalue} />
      &nbsp;
      <Button val="1" clk={putvalue} />
      &nbsp;
      <Button val="*" clk={putvalue} />
      <br />
      <Button val="clr" clk={clr}/>
      &nbsp;
      <Button val="0" clk={putvalue} />
      &nbsp;
      <Button val="=" clk={calc}/>
      &nbsp;
      <Button val="/" clk={putvalue} />
    </div>
  );
};
