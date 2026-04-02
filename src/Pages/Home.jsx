import { Link } from "react-router-dom"
import img from "../assets/img.jpg"
import "./home.css"
export function Home(){
    return (
        <div className="menu">
         <h1>Welcome to Gym Supplement Store!</h1>
         <Link to="/Products">
           <img src={img} alt="" />
           <button className="home-button">View All Products</button>
         </Link>

        </div>
    )
}