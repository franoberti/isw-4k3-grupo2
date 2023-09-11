import React from 'react';

const CarritoCompraItem = ({ item, onRemoveItem }) => {
    return (
        <div className="shopping-cart-item">
            <div className="item-image">
                <img src={item.imageSrc} alt={item.name} />
            </div>
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price.toFixed(2)}</p>
            </div>
            <div className="item-remove">
                <button onClick={() => onRemoveItem(item.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CarritoCompraItem;
