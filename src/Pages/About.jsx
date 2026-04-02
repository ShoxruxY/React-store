import { Link } from "react-router-dom"

export function About(){
    return (
        <div >
         <h1>About us</h1>
         <h2>At Gym Suplements Store it is our goal to provide every customer with the highest quality supplements to support your athletic endeovars!</h2>
         <h2>We were founded in 2017 and blah blah blah</h2>
         <h2>Enjoy all the products and be sure to contact us with questions</h2>
         <Link to="/Contact">
           <button>Contact Us</button>
         </Link>

        </div>
    )
}