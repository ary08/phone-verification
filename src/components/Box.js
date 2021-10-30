import React, { useState } from "react";
import "./styles.css";
import Welcome from "./Welcome";

export default function Box(props) {
  const [Item] = useState([]);
  const [number] = useState(props.number);
  const [bool, setBool] = useState(true);

  const listofItems = () => {
    console.log("verifiy");
    setBool(false);
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
  };

  function Boxchange1(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("input2").focus();
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  function Boxchange2(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("input3").focus();
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  function Boxchange3(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("input4").focus();
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  function Boxchange4(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("input5").focus();
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  function Boxchange5(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("input6").focus();
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  function Boxchange6(e) {
    var target = e.srcElement || e.target;
    if (
      target.value.length === parseInt(target.attributes["maxLength"].value)
    ) {
      document.getElementById("submitbtn").style.opacity = 1;
    } else if (target.value.length === 0) {
      var previous = target;
      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  }

  // resend otp function
  function reSend() {
    console.log("re-send OTP");
  }

  return bool ? (
    <>
      <div className="creditcard" id="creditcard">
        <h2 className="name">Phone Verification</h2>
        <hr />
        <h3 className="otpmsg">
          Enter the OTP you received on {number.slice(0, 4)}XXXX
          {number.slice(8, 10)}
        </h3>
        <input
          id="input1"
          onKeyUp={Boxchange1}
          maxLength="1"
          className="box"
          type="text"
        />
        <input
          id="input2"
          onKeyUp={Boxchange2}
          maxLength="1"
          className="box"
          type="text"
        />
        <input
          id="input3"
          onKeyUp={Boxchange3}
          maxLength="1"
          className="box"
          type="text"
        />
        <input
          id="input4"
          onKeyUp={Boxchange4}
          maxLength="1"
          className="box"
          type="text"
        />
        <input
          id="input5"
          onKeyUp={Boxchange5}
          maxLength="1"
          className="box"
          type="text"
        />
        <input
          id="input6"
          onKeyUp={Boxchange6}
          maxLength="1"
          className="box"
          type="text"
        />
        <div className="verification">
          <div
            className="change_number"
            onClick={() => {
              props.onSelect(true);
            }}
          >
            Change Number
          </div>
          <div className="resend_otp" onClick={reSend}>
            Re-send OTP
          </div>
        </div>
        <br />
        <input
          className="submit"
          id="submitbtn"
          type="button"
          onClick={listofItems}
          value="Verify Phone Number"
        />
        {/* <submit className="submit" id="submitbtn" onClick={display} >submit</submit> */}
      </div>
      <ol>
        {Item.map((itemval) => {
          return (
            <>
              <span class="material-icons-outlined">
                <li>{itemval.display()}</li>
              </span>
            </>
          );
        })}
      </ol>
    </>
  ) : (
    <Welcome />
  );
}
