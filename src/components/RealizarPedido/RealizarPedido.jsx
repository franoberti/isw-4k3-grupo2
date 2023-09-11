import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx';
import styles from './realizarPedido.module.css'
import CiudadList from '../CiudadList/CiudadList'
import CarritoCompra from "../CarritoCompra/CarritoCompra";
import InputMask from "react-input-mask";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const RealizarPedido = () => {

    const [selectedMetodoPago, setSelectedMetodoPago] = useState("none");
    const [selectedEntrega, setSelectedEntrega] = useState("none");
    const [isEfectivo, setIsEfectivo] = useState(false)
    const [isTarjeta, setIsTarjeta] = useState(false)
    const [isFechaEspecifica, setIsFechaEspecifica] = useState(false)
    const [isAntesPosible, setIsAntesPosible] = useState(false)
    const [isVisa, setIsVisa] = useState(false)

    const handleSelectedMetodoPago = (event) => {
        setSelectedMetodoPago(event.target.value);
        if (event.target.value === 'Efectivo') {
            setIsEfectivo(true)
            setIsTarjeta(false)
        }
        if (event.target.value === 'Tarjeta') {
            setIsTarjeta(true)
            setIsEfectivo(false)
        }
    };
    const handleSelectedEntrega = (event) => {
        setSelectedEntrega(event.target.value);
        if (event.target.value === 'FechaEspecifica') {
            setIsFechaEspecifica(true)
            setIsAntesPosible(false)
        }
        if (event.target.value === 'AntesPosible') {
            setIsFechaEspecifica(false)
            setIsAntesPosible(true)
        }

    };
    const handleChange = (event) => {
        const value = event.target.value;
        // Validar si el valor comienza con '4' para saber si es tarjeta VISA
        if (value.startsWith('4')) {
            setIsVisa(true);
        }
        else {
            setIsVisa(false)
        }
    }

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-4">
                    <div className={`${styles.page}`}>
                        <div className={`${styles.formContainer}`}>
                            <CarritoCompra />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className={`${styles.page}`}>
                        <div className={`${styles.formContainer}`}>
                            <div className='inv'>
                                <h1 className={`inv text-center ${styles.titulo}`}>Pedido a Comercio Adherido</h1>
                            </div>
                            <form /* onSubmit={submitHandler} */ className='inv'>
                                <div className='inv d-flex align-items-center justify-content-center'>
                                    <div className='row d-flex justify-content-center inv'>
                                        <div className='col-3 inv'>

                                            <div className='inv'>
                                                <h1 className={`inv text-center ${styles.subTitulo}`}>Domicilio</h1>
                                            </div>

                                            <div className='d-flex inv '>
                                                <div className='col-9 inv'>
                                                    <input
                                                        type="text"
                                                        id='calleField'
                                                        name="calle"
                                                        placeholder="Calle y número"
                                                        required
                                                        className='form-control'
                                                        style={{ marginTop: '10px' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='d-flex inv '>
                                                <div className='col-9 inv'>
                                                    <CiudadList />
                                                </div>
                                            </div>
                                            <div className='d-flex inv '>
                                                <div className='col-9 inv'>
                                                    <textarea
                                                        type="text"
                                                        id='refField'
                                                        name="referencia"
                                                        placeholder="Referencias (opcional)"
                                                        required
                                                        className='form-control'
                                                        style={{ marginTop: '10px' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-6 inv'>

                                            <div className='inv'>
                                                <h1 className={`inv text-center ${styles.subTitulo}`}>Metodo de
                                                    Pago</h1>
                                            </div>

                                            <div className='d-flex inv '>
                                                <div className='col-7 inv'>
                                                    <select value={selectedMetodoPago}
                                                        onChange={handleSelectedMetodoPago} id="comboBoxMetodoPago"
                                                        className='form-select' style={{ marginTop: '10px' }}>
                                                        <option disabled selected value="none">Forma de pago</option>
                                                        <option value="Efectivo">Efectivo</option>
                                                        <option value="Tarjeta">Debito/Credito</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {
                                                isEfectivo ?
                                                    <div className='d-flex inv '>
                                                        <div
                                                            className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                            style={{
                                                                marginTop: '10px',
                                                                paddingRight: '15px',
                                                                paddingLeft: '15px'
                                                            }}>
                                                            <span className='inv'>Monto con que va a pagar</span>
                                                        </div>
                                                        <div className='col-7 inv'>
                                                            <input
                                                                type="number"
                                                                step="0.01"
                                                                id='montoField'
                                                                name="monto"
                                                                className='form-control'
                                                                style={{ marginTop: '10px' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                            {
                                                isTarjeta ?
                                                    <>
                                                        <div className='d-flex inv '>
                                                            <div
                                                                className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                                style={{
                                                                    marginTop: '10px',
                                                                    paddingRight: '15px',
                                                                    paddingLeft: '15px'
                                                                }}>
                                                                <span className='inv'>N° de Tarjeta</span>
                                                            </div>
                                                            <div className='col-7 inv'>
                                                                <Input as={InputMask} style={{ marginTop: '10px' }} onChange={handleChange} className='form-control' placeholder="Numero de Tarjeta" mask="9999-9999-9999-9999" maskChar={null} />
                                                            </div>
                                                        </div>
                                                        <div className='d-flex inv '>
                                                            <div
                                                                className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                                style={{
                                                                    marginTop: '10px',
                                                                    paddingRight: '15px',
                                                                    paddingLeft: '15px'
                                                                }}>
                                                                <span className='inv'>Nombre</span>
                                                            </div>
                                                            <div className='col-7 inv'>
                                                                <input
                                                                    type="text"
                                                                    id='nombreTarjetaField'
                                                                    name="nombreTarjeta"
                                                                    placeholder="Como figura en la tarjeta"
                                                                    className='form-control'
                                                                    style={{ marginTop: '10px' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='d-flex inv '>
                                                            <div
                                                                className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                                style={{
                                                                    marginTop: '10px',
                                                                    paddingRight: '15px',
                                                                    paddingLeft: '15px'
                                                                }}>
                                                                <span className='inv'>Fecha de Vencimiento</span>
                                                            </div>
                                                            <div className='col-7 inv'>
                                                                <Input as={InputMask} style={{ marginTop: '10px' }} className='form-control' placeholder="MM/AAAA" mask="99/9999" maskChar={null} />
                                                            </div>
                                                        </div>
                                                        <div className='d-flex inv '>
                                                            <div
                                                                className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                                style={{
                                                                    marginTop: '10px',
                                                                    paddingRight: '15px',
                                                                    paddingLeft: '15px'
                                                                }}>
                                                                <span className='inv'>CVV</span>
                                                            </div>
                                                            <div className='col-7 inv'>
                                                                <Input as={InputMask} style={{ marginTop: '10px' }} className='form-control' placeholder="cvv" mask="999" maskChar={null} />
                                                            </div>
                                                        </div>
                                                    </>
                                                    :
                                                    <></>
                                            }
                                        </div>
                                        <div className='col-3 inv'>

                                            <div className='inv'>
                                                <h1 className={`inv text-center ${styles.subTitulo}`}>Entrega</h1>
                                            </div>
                                            <div className='inv'>

                                                <div
                                                    className='d-flex col-12 inv text-center align-items-center justify-content-center '
                                                    style={{
                                                        marginTop: '10px',
                                                        paddingRight: '15px',
                                                        paddingLeft: '15px'
                                                    }}>
                                                    <span className='inv'>¿Cuando quiere Recibirlo?</span>
                                                </div>
                                                <div className='col-12 inv'>
                                                    <select value={selectedEntrega} onChange={handleSelectedEntrega}
                                                        id="comboBoxEntrega" className='form-select'
                                                        style={{ marginTop: '10px' }}>
                                                        <option disabled selected value="none"></option>
                                                        <option value="AntesPosible">Lo antes posible</option>
                                                        <option value="FechaEspecifica">Fecha especifica</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {
                                                isFechaEspecifica ?
                                                    <div className='d-flex inv ' style={{ marginTop: '10px' }}>
                                                        <div
                                                            className='d-flex col-5 inv text-center align-items-center justify-content-end '
                                                            style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                                            <span className='inv'>Fecha de Entrega</span>
                                                        </div>
                                                        <div className='col-7 inv'>
                                                            <input
                                                                type="date"
                                                                id='fechaEntregaField'
                                                                name="fechaEntrega"
                                                                className='form-control'
                                                                style={{ marginTop: '10px' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </div>

                                        <div className='col-4 inv' style={{ marginTop: '20px', marginBottom: '20px' }}>
                                            <button type='submit' className={`col-12 ${styles['btn-realizar-pedido']}`}>
                                                Realizar Pedido
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default RealizarPedido;