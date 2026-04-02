

export function ProductCart({product, cart, setCart}){

    function handleClick(){
        setCart([{...cart},product])

    }
    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button>${product.price}</button>
            <button onClick = {()=>handleClick()}>
                {cart.find((item) => item.title == product.title) ? "Added To Cart" : "Add To Cart"}
            </button>
        </>
    )
}