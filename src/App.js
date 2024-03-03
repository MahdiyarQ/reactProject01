import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  
const [count,setCount]=useState(0)

return ( 
  <div className='App'>

<h2 style={{backgroundColor: count%5==0 ? "green" : "red"}} >{count}</h2>
<p>
  <button onClick={()=>{setCount(count+1)}}>Increase</button>
  <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  <button onClick={()=>{setCount(0)}}>Reset</button>
</p>

  </div>

      );
}

export default App;

