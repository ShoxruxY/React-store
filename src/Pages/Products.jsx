import "./products.css"
import { ProductCart } from "../Components/ProductsCart";
export function Products({cart, setCart}){
    const protein = {title: "Protein Powder", desc: "Whey protein powder used for building muscle",price: 40};
    const creatine = {title:"Creatine", desc: "Creatine monohydrate used to supplement your athletism", price: 25};
    const massGainer = {title: "Mass Gainer", desc: "Dense carb-loaded powder for packing on weight", price: 50};

    const products = [protein, creatine, massGainer];
    return (
        <div className ="products">
        {products.map((product) => {
            return (
               <ProductCart product={product} cart={cart} setCart={setCart}/>
            )
        })}
        </div>
    )
}