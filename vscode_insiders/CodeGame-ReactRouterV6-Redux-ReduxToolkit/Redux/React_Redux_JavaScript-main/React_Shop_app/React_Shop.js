import React, {useState} from "react";
import ShopItem from "./ShopItem";
const Shop = () => {
    const productList = ["MacBook Pro", "Dell X5500", "Asus NT6000"];
    const [bought, setBought] = useState([])


    const buy = (whichProduct) => {
        setBought(prev => [...prev, whichProduct])
    };

    return (
        <ul>
            {productList.map((product) => (
                <li><ShopItem title={product} onBuy={buy} /></li>
            ))}
            {bought}
        </ul>
    );
}

export default Shop;
