function Student(props){
    return(
        <>
            {/* <h1>Student name is {p.name} {p.rollno}</h1> */}
            {/* <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr> */}
            <ul>
           <li> {props.index+1}{props.name}{props.rollno}</li></ul>
        </>
    )
}
export default Student