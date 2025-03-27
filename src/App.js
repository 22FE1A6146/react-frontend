import './App.css';
import { useState } from 'react';
export default function App(){
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/add/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a: Number(a), b: Number(b) }),
    });

    const data = await response.json();
    setResult(data.result);
  };
return(
  <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter A" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter B" />
      <button onClick={handleAddition}>Add</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
)
  
}
  
// same as the name here also in import 
//else import {person as p } from './App'  