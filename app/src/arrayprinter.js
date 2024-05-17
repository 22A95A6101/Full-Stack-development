import React, { useState } from 'react';

function ArrayPrinter() {
  const [arr,setarr] = useState('apple','branch','papaya','grapes');
  const[fruitname,setFruitname] = useState('')

  return (
    <div>
      <input type='text' onChange={(fruitname)=> setFruitname(e.target.value)}/>
      <button>Find</button>
      <ul style={{'display':'inline-block'}}>
        {
        arr.map((ele) => {
          return(<li>{ele}</li>)
        })}
      </ul>
    </div>
  );
}

export default ArrayPrinter;
