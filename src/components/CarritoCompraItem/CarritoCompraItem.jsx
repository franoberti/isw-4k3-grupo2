import React from 'react';
import styles from './carritocompraitem.module.css';
import IconoEliminar from '../../assets/icono-eliminar.svg'
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
                    Precio: <span style={{ color: 'grey', backgroundColor: "white" }}>${item.price}</span>
                </p>
            </div>
            <div className="col-2 bg-white">
                <button onClick={() => onRemoveItem(item.id)} style={{ border: 'none', backgroundColor: 'white', marginTop: 25 }}>
                    <img src={IconoEliminar} alt="Trash Icon" style={{ backgroundColor: "white", width: 20, height:20}}/>
                </button>
            </div>
        </div>
    );
};

export default CarritoCompraItem;
