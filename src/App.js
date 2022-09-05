import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [theMessage, setMessage] = useState("");
  const initalPrice = useRef();
  const qos = useRef();
  const ltp = useRef();

  const calcResult = () => {
    let porl = 0;
    let totPercent = 0;
    porl = qos.current.value * (ltp.current.value - initalPrice.current.value);
    if (porl > 0) {
      totPercent =
        ((ltp.current.value - initalPrice.current.value) /
          initalPrice.current.value) *
        100;
      setMessage(
        "Hey 😊, Profit is " +
          porl +
          " and Profit Percentage is " +
          totPercent +
          "%"
      );
    } else {
      totPercent =
        ((initalPrice.current.value - ltp.current.value) /
          initalPrice.current.value) *
        100;
      setMessage(
        "Hey 🥲, Loss is " +
          porl +
          " and Loss Percentage is " +
          totPercent +
          "%"
      );
    }
  };
  return (
    <div className="App">
      <h1>Stock Market - Profit &#38; Loss Calculator</h1>
      <div className="form-control">
        <label htmlFor="initalPrice">Avg Buy Price: </label>
        <input id="initalPrice" ref={initalPrice} type="number"></input>
      </div>
      <div className="form-control">
        <label htmlFor="QoS">Quantity of Stocks: </label>
        <input id="QoS" ref={qos} type="number"></input>
      </div>
      <div className="form-control">
        <label htmlFor="LTP">Last Trading Price: </label>
        <input id="LTP" ref={ltp} type="number"></input>
      </div>
      <div className="form-control">
        <button className="btn" onClick={calcResult}>
          Submit
        </button>
      </div>
      <div className="form-control">
        <p>{theMessage}</p>
      </div>
    </div>
  );
}

export default App;
