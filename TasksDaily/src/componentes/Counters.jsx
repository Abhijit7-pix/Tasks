import { useState } from "react"

function Counters (){
 const [count, setCount]=useState(0)

 return(
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> Incriment</button>
        <button onClick ={()=>setCount(count-1)}> Decriment</button>
        <button onClick ={()=>setCount(0)}> Reset</button>
    </div>
 )
}
export default Counters