import React from "react";

const ShopItem = ( {title, onBuy}) => {

    const handleClick = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
    };

    return (
        <>
            <h1>{title}</h1>
            <button onClick={handleClick}>Kup</button>
        </>
    )


}

export default ShopItem;
