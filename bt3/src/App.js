import "./App.css";
import { useRef, useState } from "react";
import ShowTimer from "./components/ShowTimer";

function App() {
  const [timer, setTimer] = useState({ h: 0, m: 0, s: 0 });
  const [result, setResult] = useState([]);
  const [isPause, setIsPause] = useState(true);
  const timerRef = useRef();

  let updateH = timer.h;
  let updateM = timer.m;
  let updateS = timer.s;

  function run() {
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    updateS++;
    return setTimer({ h: updateH, m: updateM, s: updateS });
  }

  function handleStart() {
    setIsPause(false);
    if (isPause) {
      timerRef.current = setInterval(run, 1000);
    }
  }

  function handlePause() {
    clearInterval(timerRef.current);
    setIsPause(true);
  }

  function handleFinish() {
    setIsPause(true);
    clearInterval(timerRef.current);
    setResult((res) => [...res, timer]);
    setTimer({ h: 0, m: 0, s: 0 });
  }

  return (
    <div className="timer">
      <h3 style={{ textAlign: "center" }}>Đồng hồ bấm giờ</h3>
      <ShowTimer center="center" timer={timer} />
      <div className="grBtn">
        <button onClick={handleStart}>Bắt đầu/Tiếp tục</button>
        <button onClick={handlePause}>Tạm dừng</button>
        <button onClick={handleFinish}>Kết thúc</button>
      </div>
      <div>
        Kết quả:
        {result &&
          result.map((item, index) => (
            <div key={index}>
              <ShowTimer timer={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
