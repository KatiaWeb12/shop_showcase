import { useState } from "react";
import "./ProductCounter.css";

export default function ProductCounter() {
  const [count, setCount] = useState(0)
  function changeCount(k){
    if ((count + k) < 0){
      return
    }
    setCount(count + k)
  }
  return (
    <div className="counter">
      <button onClick={()=>changeCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={()=>changeCount(1)}>+</button>
    </div>
  );
}
