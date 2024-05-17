import Student from './student';
function Trainees(){
    let students=[{
        name:'Priya',
        rollno:1234
    },{
        name:'Priya',
        rollno:4444
    }]
    return(
        <div className='App'>
            <h1>Trainees list</h1>
            {/* <table border={1} cellSpacing={0} align='center'>
                <tr><th>S.No</th><th>Name</th><th>RollNO</th></tr>
            {
                students.map((ele,i,arr) => {
                    return (<Student index={i} name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </table> */}
             <ul>
                <li>
                S.No Name RollNO</li>
            {
                students.map((ele,i,arr) => {
                    return (<Student index={i} name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </ul>
        </div>
       
    )
}
export default Trainees