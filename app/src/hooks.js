import { useState } from "react";

function Hooks(){
    // let cnt = 1
    // const getcount = (count) =>{
    //     cnt = ++count
    //     console.log(cnt)
    const [cnt,setCnt]=useState(0)
    const [name,setName]=useState('')
    // }
    return(
        <div>
            React Hooks
            <p>count is {cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>Increment</button>
            <button onClick={()=>setCnt(cnt-1)}>Decrement</button><br/>
            <input type ="text" onChange={(e)=>setName(e.target.value)}/>
            <h2>Name is: {name}</h2>
        </div>
    )
}
export default Hooks;