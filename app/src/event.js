// function Events(){
//     let trainee = [{
//         name:'priya',
//         rolno:1234
//     },
//     {
//         name:'chandu',
//         rolno:6148
//     }
//     ]
   
//     function getdata(res){
//        document.write( );
//     }
//     return(
//         <div>
//             <h1>Events</h1>
            
//             <button onClick={()=>getdata(trainee)}>Click here</button>
//         </div>
//         );
// }
// export default Events;
//  // function getdata(name){
//     //     alert("name is:"+name)
//     // }
   
import React, { useState } from 'react';

function TraineeList() {
  const trainees = [
    { id: 1, name: 'priya' },
    { id: 2, name: 'chandu' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'sree' },
  ];

  const [showTrainees, setShowTrainees] = useState(false);

  const handleShowTraineesClick = () => {
    setShowTrainees(true);
  };

  return (
    <div>
      <h1>Trainees</h1>
      <button onClick={handleShowTraineesClick}>Show Trainees</button>

      {showTrainees && (
        <ol>
          {trainees.map((trainee) => (
            <li key={trainee.id}>{trainee.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default TraineeList;
