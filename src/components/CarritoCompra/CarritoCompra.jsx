import React, {useState} from 'react';
import styles from './carritocompra.module.css'
import CarritoCompraItem from "../CarritoCompraItem/CarritoCompraItem";


const CarritoCompra = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Producto 1',
            price: 20.99,
            imageSrc: 'imagen1.jpg',
        },
        {
            id: 2,
            name: 'Producto 2',
            price: 15.49,
            imageSrc: 'imagen2.jpg',
        },
        // Agrega más elementos según sea necesario.
    ]);

    const handleRemoveItem = (itemId) => {
        // Lógica para eliminar un artículo del carrito.
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="col">
            <div className={`${styles.page}`}>
                <div className='inv'>
                    <h1 className={`inv text-center ${styles.titulo}`}>Resumen</h1>
                    {cartItems.map((item) => (
                        <CarritoCompraItem
                            key={item.id}
                            item={item}
                            onRemoveItem={handleRemoveItem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarritoCompra;
