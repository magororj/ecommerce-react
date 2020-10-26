import React from "react";

const CartItem = props => {
    const { cartItem, carKey } = props;

    const { product, amount } = cartItem;
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img 
                                src="https://bulma.io/images/placeholders/128x128.png"
                                alt={product.shortDesc}
                                />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize"}}>
                            {product.name}{" "}
                            <span className="tag is-primary">${product.price}</span>
                        </b>
                        <div>{product.shortDesc}</div>
                        <small>{`${amount} no carrinho`}</small>
                    </div>
                    <div
                        className="media-right"
                        onClick={() => props.removeFromCart(carKey)}
                        >
                            <span className="delete is-large"></span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;