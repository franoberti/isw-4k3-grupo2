import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx';
import styles from './realizarPedido.module.css'

const RealizarPedido = () => {

    const [selectedMetodoPago, setSelectedMetodoPago] = useState("none");
    const [selectedEntrega, setSelectedEntrega] = useState("none");

    const handleSelectedMetodoPago = (event) => {
        setSelectedMetodoPago(event.target.value);
    };

    const handleSelectedEntrega = (event) => {
        setSelectedEntrega(event.target.value);
    };

    return (
        <>
            <NavBar />
            <div className={`${styles.page}`}>
                <div className={`${styles.formContainer}`}>
                    <div className='inv'>
                        <h1 className={`inv text-center ${styles.titulo}`}>Pedido a Comercio Adherido</h1>
                    </div>
                    <form /* onSubmit={submitHandler} */ className='inv'>
                        <div className='inv d-flex align-items-center justify-content-center' >
                            <div className='row d-flex justify-content-center inv'>
                                <div className='col-4 inv '>

                                    <div className='inv'>
                                        <h1 className={`inv text-center ${styles.subTitulo}`}>Domicilio</h1>
                                    </div>

                                    <div className='d-flex inv '>
                                        <div className='d-flex col-5 inv text-center align-items-center justify-content-end ' style={{ marginTop: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
                                            <span className='inv'>Calle</span>
                                        </div>
                                        <div className='col-7 inv'>
                                            <input
                                                type="text"
                                                id='calleField'
                                                name="calle"
                                                placeholder="Calle"
                                                required
                                                className='form-control'
                                                style={{ marginTop: '10px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex inv '>
                                        <div className='d-flex col-5 inv text-center align-items-center justify-content-end ' style={{ marginTop: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
                                            <span className='inv'>Numero</span>
                                        </div>
                                        <div className='col-7 inv'>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                id='numeroField'
                                                name="numero"
                                                placeholder="numero"
                                                className='form-control'
                                                style={{ marginTop: '10px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex inv '>
                                        <div className='d-flex col-5 inv text-center align-items-center justify-content-end ' style={{ marginTop: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
                                            <span className='inv'>Ciudad</span>
                                        </div>
                                        <div className='col-7 inv'>
                                            <select /* value={selectedCiudad} onChange={handleSelectedCiudad} */ id="comboBoxCiudad" className='form-select' style={{ marginTop: '10px' }}>
                                                <option disabled selected value="none"></option>
                                                <option value="">Villa Carlos Paz</option>
                                                <option value="">Santa Rosa de Calamuchita</option>
                                                <option value="">Villa General Belgrano</option>
                                                <option value="">Cosquín</option>
                                                <option value="">Mina Clavero</option>
                                                <option value="">Nono</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4 inv'>

                                    <div className='inv'>
                                        <h1 className={`inv text-center ${styles.subTitulo}`}>Metodo de Pago</h1>
                                    </div>
                                    <div className='d-flex inv '>

                                        <div className='d-flex col-5 inv text-center align-items-center justify-content-end ' style={{ marginTop: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
                                            <span className='inv'>Forma de Pago</span>
                                        </div>
                                        <div className='col-7 inv'>
                                            <select value={selectedMetodoPago} onChange={handleSelectedMetodoPago} id="comboBoxMetodoPago" className='form-select' style={{ marginTop: '10px' }}>
                                                <option disabled selected value="none"></option>
                                                <option value="Efectivo">Efectivo</option>
                                                <option value="Tarjeta">Debito/Credito</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 inv'>

                                    <div className='inv'>
                                        <h1 className={`inv text-center ${styles.subTitulo}`}>Entrega</h1>
                                    </div>
                                    <div className='d-flex inv '>

                                        <div className='d-flex col-5 inv text-center align-items-center justify-content-end ' style={{ marginTop: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
                                            <span className='inv'>¿Cuando quiere Recibirlo?</span>
                                        </div>
                                        <div className='col-7 inv'>
                                            <select value={selectedEntrega} onChange={handleSelectedEntrega} id="comboBoxEntrega" className='form-select' style={{ marginTop: '10px' }}>
                                                <option disabled selected value="none"></option>
                                                <option value="AntesPosible">Lo antes posible</option>
                                                <option value="FechaEspecifica">Fecha especifica</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4 inv' style={{ marginTop: '20px' }}>
                                    <button type='submit' className=' col-12 btn btn-success' style={{ marginTop: '10px' }}>
                                        {/* {
                                        waiting ?
                                            <div className="spinner-border inv" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            :
                                            <p className='inv' style={{ marginBottom: '0' }}>Registrar Bovino</p>
                                        } */}
                                    Realizar Pedido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default RealizarPedido;