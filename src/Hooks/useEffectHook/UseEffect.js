import React, { useEffect , useState} from "react";

const UseEffect = () => {
 const[count ,setCount] = useState(0)

 useEffect(()=>{
    document.title = count
 } , [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementt(+)</button>
      <h1>{count}</h1>
      <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
        Decrement(-)
      </button>
    </div>
  );
};

export default UseEffect;
