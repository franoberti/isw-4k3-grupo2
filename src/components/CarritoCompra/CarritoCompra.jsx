import React, {useState} from 'react';
import styles from './carritocompra.module.css'
import CarritoCompraItem from "../CarritoCompraItem/CarritoCompraItem";
import imagen1 from '../../assets/1.jpg';
import imagen2 from '../../assets/2.jpg';
import imagen3 from '../../assets/3.jpg';
import imagen4 from '../../assets/4.jpg';
import imagen5 from '../../assets/5.jpg';
import imagen6 from '../../assets/6.jpg';

const CarritoCompra = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Queso rayado',
            price: 20.99,
            imageSrc: imagen1,
        },
        {
            id: 2,
            name: 'Jugo en polvo',
            price: 15.49,
            imageSrc: imagen2,
        },
        {
            id: 3,
            name: 'Antitranspirante Dave',
            price: 4.22,
            imageSrc: imagen3,
        },
        {
            id: 4,
            name: 'Galletitas sonrisas',
            price: 19.49,
            imageSrc: imagen4,
        },{
            id: 5,
            name: 'Otras galletitas',
            price: 7.24,
            imageSrc: imagen5,
        },{
            id: 6,
            name: 'Crema de leche',
            price: 16.69,
            imageSrc: imagen6,
        }
    ]);

    const handleRemoveItem = (itemId) => {
        // Lógica para eliminar un artículo del carrito.
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="col bg-white">
            <div className='inv'>
                <h1 className={`inv text-center ${styles.titulo}`}>Resumen</h1>
            </div>
            <div className={`${styles.page}`}>

                {cartItems.map((item) => (
                    <CarritoCompraItem
                        key={item.id}
                        item={item}
                        onRemoveItem={handleRemoveItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default CarritoCompra;
