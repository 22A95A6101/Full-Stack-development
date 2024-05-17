// function Event1(){
//     function getdata(e){
//         // console.log(e.target.value);
//         console.log(e.target.name+"value is:"+e.target.value);


//     }
//     return(
//         <div>
//             <h1>Input Events</h1>
//             <input type="text" name="firstname" onChange={getdata}></input>
//         </div>
//     )
// }
// export default Event1;
function Event1(){
    function getdata(e,arg2){ 
        // console.log(e.target.value);
        console.log(e.target.name+"value is:"+e.target.value+""+arg2);


    }
    return(
        <div>
            <h1>Input Events</h1>
            <input type="text" name="firstname" onChange={(e)=> getdata(e,"priya")}/>
        </div>
    )
}
export default Event1;