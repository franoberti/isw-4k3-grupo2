import React from 'react';
import styles from './carritocompra.module.css'


const CarritoCompra = () => {
    return (
        <div className="col">
            <div className={`${styles.page}`}>
                <div className='inv'>
                    <h1 className={`inv text-center ${styles.titulo}`}>Resumen</h1>
                </div>
            </div>
        </div>
    );
}

export default CarritoCompra;
