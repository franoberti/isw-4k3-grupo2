import React, { useEffect, useState } from 'react';
import styles from './carritocompra.module.css'
import CarritoCompraItem from "../CarritoCompraItem/CarritoCompraItem";
import imagen1 from '../../assets/1.jpg';
import imagen2 from '../../assets/2.jpg';
import imagen3 from '../../assets/3.jpg';
import imagen4 from '../../assets/4.jpg';
import imagen5 from '../../assets/5.jpg';
import imagen6 from '../../assets/6.jpg';
import button from "bootstrap/js/src/button";

const CarritoCompra = ({ setIsCartEmpty, costoEnvio }) => {

    const [total, setTotal] = useState(0)

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Queso rayado',
            price: '20,99',
            imageSrc: imagen1,
        },
        {
            id: 2,
            name: 'Jugo en polvo',
            price: '15,76',
            imageSrc: imagen2,
        },
        {
            id: 3,
            name: 'Antitranspirante Dave',
            price: '4,22',
            imageSrc: imagen3,
        },
        {
            id: 4,
            name: 'Galletitas sonrisas',
            price: '19,49',
            imageSrc: imagen4,
        }, {
            id: 5,
            name: 'Otras galletitas',
            price: '7,24',
            imageSrc: imagen5,
        }
    ]);

    useEffect(() => {
        calcularTotal(costoEnvio)
    })

    const calcularTotal = (envio) => {
        let total = 0
        for (let i = 0; i < cartItems.length; i++) {

            total += (parseFloat(cartItems[i].price.replace(',', '.')));
        }

        if(envio){

            total += envio
        }


        let totalFormateado = total.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        setTotal(totalFormateado)
    }

    const handleRemoveItem = (itemId) => {
        // Lógica para eliminar un artículo del carrito.
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        if (updatedCartItems.length > 0) {
            setIsCartEmpty(false)
        } else {
            setIsCartEmpty(true)
        }
    };

    return (
        <div className="col bg-white">
            <div className='inv'>
                <h1 className={`inv text-center ${styles.titulo}`}>Resumen</h1>
            </div>
            <div className={`${styles.page}`}>

                {cartItems.length < 1 ?
                    <div className='row text-center inv'>
                        <h3 className='inv'>El carrito esta vacio!</h3>
                    </div>
                    :
                    cartItems.map((item) => (
                        <CarritoCompraItem

                            key={item.id}
                            item={item}
                            onRemoveItem={handleRemoveItem}
                        />
                    ))
                }
            </div>
            <div className='inv d-flex justify-content-center' style={{ gap: '10px' }}>
                <h3 className={`${styles.total} inv`}>Total:</h3>
                <p className='inv' style={{ marginTop: '0.5rem' }}>${total}</p>
            </div>
        </div>
    );
}

export default CarritoCompra;
