import Products1 from "./prodcuts1"
function Product(){
    let products=[{
        name:'shirts',
        cost:1200
    },{
        name:'jeans',
        cost:4000
    }]
    return(
        <div className='App'>
            <h1>Product list</h1>
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
                S.No Name Cost</li>
            {
                products.map((ele,i,arr) => {
                    return (<Products1 index={i} name={ele.name} cost={ele.cost}/>)
                })
            }
            </ul>
        </div>
       
    )
}
export default Product