import React, { useState, useEffect } from "react";
import "../styles.css";
import img4 from "../assets/img/img4.svg";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";

function App() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Month, setMonth] = useState("");
  const [Year, setYear] = useState("");
  const [Cvc, setCvc] = useState("");
  const [TargetName, setTargetName] = useState("JANE APPLESEED");
  const [TargetNumber, setTargetNumber] = useState("0000 0000 0000 0000");
  const [TargetMonth, setTargetMonth] = useState("00");
  const [TargetYear, setTargetYear] = useState("00");
  const [TargetCvc, setTargetCvc] = useState("000");
  const [errorA, setErrorA] = useState(false);
  const [errorB, setErrorB] = useState(false);
  const [errorC, setErrorC] = useState(false);
  const [errorD, setErrorD] = useState(false);
  const [errorE, setErrorE] = useState(false);
  const [Contprincipal, setContprincipal] = useState(true);
  const [ContGratitude, setContGratitued] = useState(false);
  let regExp = /[A-z]/g;

  useEffect(() => {}, []);

  const handleKeyUpName = (e) => {
    const inputValue = e.target.value;
    const NameResult = inputValue.replace(/[0-9]/g, "");
    setName(NameResult);
    setTargetName(inputValue);

    if (inputValue == "") {
      setErrorA("This field is required", true);
      setTargetName("JANE APPLESEED");
    } else {
      setErrorA("");
    }
  };
  const handleKeyUpNumber = (e) => {
    const inputValue = e.target.value;
    const NumberResult = inputValue
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ').trim();

    setNumber(NumberResult)
    setTargetNumber(inputValue);

    if (regExp.test(Number)) {
      setErrorB("wrong format, numbers only", true);
      return;
    } else {
      setErrorB("");
    }
    if (Number == "") {
      setErrorB("This field is required", true);
      setTargetNumber("0000 0000 0000 0000");
    } else {
      setErrorB("");
    }
  };

  const handleKeyUpMonth = (e) => {
    const inputValue = e.target.value;
    const MonthResult = inputValue.replace(/[A-z]/g, "");
    setMonth(MonthResult);
    setTargetMonth(inputValue);

    if (Month > 12) {
      return;
    }
    if (Month == "") {
      setErrorC("This field is required", true);
      setTargetMonth("00");
    } else {
      setErrorC("");
    }
  };

  const handleKeyUpYear = (e) => {
    const inputValue = e.target.value;
    const YearResult = inputValue.replace(/[A-z]/g, "");
    setYear(YearResult);
    setTargetYear(inputValue);

    if (Year > 23) {
      return;
    }
    if (Year == "") {
      setErrorD("can`t be blank", true);
      setTargetYear("00");
    } else {
      setErrorD("");
    }
  };

  const handleKeyUpCvc = (e) => {
    const inputValue = e.target.value;

    const CvcResult = inputValue.replace(/[A-z]/g, "");
    setCvc(CvcResult);
    setTargetCvc(inputValue);

    if (Cvc == "") {
      setErrorE("can`t be blank", true);
      setTargetCvc("000");
    } else {
      setErrorE("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name) {
      return;
    } else if (!Number) {
      return;
    } else if (!Month) {
      return;
    } else if (!Year) {
      return;
    } else if (!Cvc) {
      return;
    }

    if (Contprincipal) {
      setContprincipal(false);
      setContGratitued(true);
    }
  };

  const RegistrationForm = () => {
    setContprincipal(true);
    setContGratitued(false);
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="container-left"></div>
      <div className="back-card">
      <img src={img3} />
        <div className="card-cvc">
          <label>{TargetCvc}</label>
        </div>
      </div>

      <div className="front-card">
      <img src={img2} />
        <div className="jjj">
          <h1></h1>
          <h2></h2>
        </div>
        <div className="card-number">
          <div>
            <span className="Style-number">{TargetNumber}</span>
          </div>
        </div>
        <div className="card-footer">
          <div>
            <label className="card-name">{TargetName}</label>
          </div>
          <div className="card-fecha">
            <label>
              {TargetMonth}/{TargetYear}
            </label>
          </div>
        </div>
      </div>

      <div className="container-right">
        {Contprincipal && (
          <form className="form" onSubmit={handleSubmit}>
            <div className="container-form">
              <span>CARDHODER NAME</span>
              <div>
                <input
                  maxLength={40}
                  className={errorA && !Name ? "input-inv" : "name"}
                  placeholder="e.g Jane Appleseed"
                  onKeyUp={handleKeyUpName}
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errorA && <p>{errorA}</p>}
              </div>

              <span>CARD NUMBER</span>
              <div>
                <input
                  maxLength={19}
                  className={errorB ? "input-inv" : "number"}
                  placeholder="e.g 1234 5678 9123 000"
                  onKeyUp={handleKeyUpNumber}
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {errorB && <p>{errorB}</p>}
              </div>

              <div className="container-fecha">
                <div style={{ width: "50%" }}>
                  <div>
                    <span>EXP. DATE (MM/YY)</span>
                  </div>
                  <div className="content-month-year">
                    <div>
                      <input
                        maxLength={2}
                        className={errorC ? "input-inv" : "Month"}
                        placeholder="MM"
                        onKeyUp={handleKeyUpMonth}
                        value={Month}
                        onChange={(e) => setMonth(e.target.value)}
                      />
                      {errorC && <p>{errorC}</p>}
                    </div>

                    <div>
                      <input
                        maxLength={2}
                        className={errorD ? "input-inv" : "Year"}
                        placeholder="YY"
                        onKeyUp={handleKeyUpYear}
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                      />
                      {errorD && <p>{errorD}</p>}
                    </div>
                  </div>
                </div>
                <div className="content-cvc">
                  <span>CVC</span>

                  <div>
                    <input
                      maxLength={3}
                      className={errorE ? "input-inv" : "Cvc"}
                      placeholder="e.g 123"
                      onKeyUp={handleKeyUpCvc}
                      value={Cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                    {errorE && <p>{errorE}</p>}
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">
                <label>Confirm</label>
              </button>
            </div>
            <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Lex-0" target="_black">Lex-0</a>.
      </footer>
          </form>
          
        )}
        {ContGratitude && (
          <div className="gratitude">
            <img src={img4} />
            <h5>THANK YOU!</h5>
            <label>We've added your card details</label>
            <button className="btn" onClick={RegistrationForm}>
              Continue
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
