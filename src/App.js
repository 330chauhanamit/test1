import { useState } from "react";
import "./styles.css";

export default function App() {
  const [posl, setPosl] = useState(50);
  // const [posr, setPosr] = useState(100-posl);
  const [posu, setPosu] = useState(50);
  // const [posd, setPosd] = useState(0);
  const left = (e) => {
    e.preventDefault();
    if (posl > 10) setPosl((posl) => posl - 10);
    console.log(posl);
  };
  const right = (e) => {
    e.preventDefault();
    if (posl < 90) setPosl((posl) => posl + 10);
    console.log(posl);
  };
  const up = (e) => {
    e.preventDefault();
    if (posu > 10) setPosu((posu) => posu - 10);
    console.log(posu);
  };
  const down = (e) => {
    e.preventDefault();
    if (posu < 90) setPosu((posu) => posu + 10);
    console.log(posu);
  };

  return (
    <div className="App">
      <input className="up-button" type="button" onClick={(e) => up(e)} />
      <div className="middle-containter">
        <input className="left-button" type="button" onClick={(e) => left(e)} />
        <div
          style={{
            display: "flex",
            width: "80%",
            height: "100%"
          }}
        >
          <div
            className="center_box"
            style={{ position: "relative", left: `${posl}%`, top: `${posu}%` }}
          ></div>
        </div>
        <input
          className="right-button"
          type="button"
          onClick={(e) => right(e)}
        />
      </div>
      <input className="down-button" type="button" onClick={(e) => down(e)} />
    </div>
  );
}
