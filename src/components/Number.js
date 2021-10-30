import React, { useState } from "react";
import Box from "./Box";

function Number() {
  const [bool, setBool] = useState(true);
  const [input, setInput] = useState("");
  const [number, setNumber] = useState("9651222252");
  const [message, setMsg] = useState("");
  const [border, setBorder] = useState("1px solid grey");
  const [btncolo, setCol] = useState("#81b29a");
  // get OTP method invoked
  function clickHandle() {
    if (input.length === 10 && isNaN(input) === false) {
      setBool(false);
      setNumber(input);
      setInput("");
      setCol("#81b29a");
    } else {
      setMsg("Enter valid mobile number");
      setBorder("1px solid red");
    }
  }

  // input filed onchange method
  function inputHandle(e) {
    setInput(e.target.value);
    setBorder("1px solid grey");
    setMsg("");
    if (e.target.value.length === 10 && isNaN(e.target.value) === false) {
      setCol("green");
    } else {
      setCol("#81b29a");
    }
  }
  //  bool variable manage like todo app parent to cg=hild and reverse
  function handleBool(e) {
    setBool(e);
  }

  return bool ? (
    <div className="changeNumber">
      <h1 style={{ marginTop: "5%" }}>Register Mobile Number</h1>
      <hr />
      <lable className="mobileNumber">Mobile Number </lable>
      <br />
      <input
        onChange={inputHandle}
        type="text"
        maxLength="10"
        className="mobile_input"
        required
        value={input}
        style={{ border: `${border}` }}
      />
      <br />
      <p style={{ color: "red" }}>{message}</p>
      <br />
      <button
        style={{ backgroundColor: `${btncolo}` }}
        type="button"
        className="getotp"
        onClick={clickHandle}
      >
        Get OTP
      </button>
    </div>
  ) : (
    <Box number={number} onSelect={handleBool} />
  );
}

export default Number;
