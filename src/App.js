import "./styles.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export default function App() {
  const boxPos = useSpring({ x: 0, y: 0 });
  const bindPos = useDrag((params) => {
    boxPos.x.set(params.offset[0]);
    boxPos.y.set(params.offset[1]);
  });
  const [posl, setPosl] = useState(50);
  const [posu, setPosu] = useState(50);
  const [clicked, setClicked] = useState(false);
  // const intervalRef = useRef();
  // var currentX,
  //   currentY,
  //   initialX,
  //   initialY,
  //   xOffset = 0,
  //   yOffset = 0;

  useEffect(() => {}, []);
  const left = (e) => {
    // boxPos.x.set(posl);
    // e.preventDefault();
    if (posl > 10) setPosl((posl) => posl - 5);
    console.log(posl);
  };
  const right = (e) => {
    // e.preventDefault();
    if (posl < 90) setPosl((posl) => posl + 5);
    console.log(posl);
  };
  const up = () => {
    // e.preventDefault();
    if (posu > 10) setPosu((posu) => posu - 5);
    console.log(posu);
  };
  const down = (e) => {
    // e.preventDefault();
    if (posu < 90) setPosu((posu) => posu + 5);
    console.log(posu);
  };

  // var interval,
  //   time = 10;

  // const start = (e) => {
  //   initialX = e.clientX - xOffset;
  //   initialY = e.clientY - yOffset;
  //   setClicked(true);
  //   console.log(e);
  // };
  // const drag = (e) => {
  //   if (clicked) {
  //     e.preventDefault();
  //     currentX = e.clientX - initialX;
  //     currentY = e.clientY - initialY;

  //     xOffset = currentX;
  //     yOffset = currentY;
  //     console.log(currentX);
  //   }
  // };
  // const stop = (e) => {
  //   initialX = currentX;
  //   initialY = currentY;

  //   setClicked(false);

  //   console.log(e);
  // };

  return (
    <div className="App">
      <div className="upper-container">
        <input
          className="upleft-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => {
            left(e);
            up(e);
          }}
          // onMouseLeave={e}
        />
        <input
          className="up-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => up(e)}
          // onMouseLeave={e}
        />
        <input
          className="upright-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => {
            up(e);
            right(e);
          }}
          // onMouseLeave={e}
        />
      </div>
      <div className="middle-containter">
        <input className="left-button" type="button" onClick={(e) => left(e)} />
        <div
          style={{
            display: "flex",
            width: "80%",
            height: "100%"
          }}
        >
          <animated.div
            {...bindPos()}
            // onMouseDown={start}
            // onMouseMove={drag}
            // onMouseUp={stop}
            className="center_box"
            style={{
              zIndex: 5,
              position: "relative",
              x: boxPos.x,
              y: boxPos.y,
              left: `${posl}%`,
              top: `${posu}%`
            }}
          ></animated.div>
        </div>
        <input
          className="right-button"
          type="button"
          onClick={(e) => right(e)}
        />
      </div>
      <div className="upper-container">
        <input
          className="upleft-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => {
            left(e);
            down(e);
          }}
          // onMouseLeave={e}
        />
        <input
          className="up-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => down(e)}
          // onMouseLeave={e}
        />
        <input
          className="upright-button"
          type="button"
          // onMouseDown={(e) => start(e)}
          // onMouseUp={(e) => stop(e)}
          onClick={(e) => {
            down(e);
            right(e);
          }}
          // onMouseLeave={e}
        />
      </div>
    </div>
  );
}
