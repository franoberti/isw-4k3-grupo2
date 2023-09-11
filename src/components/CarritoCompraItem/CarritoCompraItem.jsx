import React from 'react';
import styles from './carritocompraitem.module.css';

const CarritoCompraItem = ({ item, onRemoveItem }) => {
    return (
        <div className="row">
            <div className="col-2 bg-white">
                <img
                    src={item.imageSrc}
                    alt={item.name}
                    style={{ width: 60, height: 60, backgroundSize: 'cover' }}
                />
            </div>
            <div className="col-8 bg-white">
                <h3 style={{ backgroundColor: "white" }}>
                    <strong style={{ fontSize: '1.1rem', backgroundColor: "white" }}>{item.name}</strong>
                </h3>
                <p style={{ backgroundColor: "white" }}>
                    Precio: <span style={{ color: 'grey', backgroundColor: "white" }}>${item.price.toFixed(2)}</span>
                </p>
            </div>
            <div className="col-2 bg-white">
                <button onClick={() => onRemoveItem(item.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CarritoCompraItem;
