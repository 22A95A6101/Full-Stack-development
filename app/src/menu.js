import { Link } from "react-router-dom"

function Menu()
{
    return(
        <div>
            <Link to="home"> Home </Link> |
            <Link to="about"> About </Link> |
            <Link to="services"> Services </Link>|
            <Link to="contact"> Contact </Link> |
            <Link to="student"> Student </Link> |
            <Link to="trainees"> trainee </Link> |
            <Link to="Events"> Events </Link> |
            <Link to="event1"> event1 </Link>
            <Link to="button"> button </Link>
            <Link to="counter"> counter </Link>
            <Link to="hooks"> Hooks </Link>
            <Link to="arrayprinter"> ArrayPrinter </Link>



        </div>
    )
}
export default Menu