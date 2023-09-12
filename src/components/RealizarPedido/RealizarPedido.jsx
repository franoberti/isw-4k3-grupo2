import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx';
import styles from './realizarPedido.module.css'
import CiudadList from '../CiudadList/CiudadList'
import CarritoCompra from "../CarritoCompra/CarritoCompra";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const RealizarPedido = () => {

    const [selectedMetodoPago, setSelectedMetodoPago] = useState("none");
    const [selectedEntrega, setSelectedEntrega] = useState("none");
    const [isEfectivo, setIsEfectivo] = useState(false)
    const [validate, setValidate] = useState(true)
    const [isTarjeta, setIsTarjeta] = useState(false)
    const [isFechaEspecifica, setIsFechaEspecifica] = useState(false)
    const [isAntesPosible, setIsAntesPosible] = useState(false)
    const [isVisa, setIsVisa] = useState(false)
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const [selectedCiudad, setSelectedCiudad] = useState("none")

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
    const validateFields = () => {
        if(!document.getElementById('calleField').value || selectedCiudad === "none" ){
            
            toast.error('Debe completar Todos los campos (Revise el domicilio)', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000, // Duración de 5 segundos
            });
            return false
        }
        else{
            if(isTarjeta){
                if(!document.getElementById('numTarjetaField').value.startsWith(4)){
                    
                    toast.error('La tarjeta ingresada no es VISA, por lo tanto es rechazada', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000, // Duración de 5 segundos
                    });
                    return false
                }
                else{
                    if(!document.getElementById('nombreTarjetaField').value || !document.getElementById('vencimientoTarjetaField').value || !document.getElementById('cvvField').value){
                        
                        toast.error('Debe ingresar todos los datos de la tarjeta', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 5000, // Duración de 5 segundos
                        });
                        return false
                    }
                }
            }
            if(isEfectivo){
                if(document.getElementById('montoField').value <= 0 || !document.getElementById('montoField').value){
                    
                    toast.error('El monto en efectivo ingresado no es valido', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000, // Duración de 5 segundos
                    });
                    return false
                }
            }
            if(isFechaEspecifica){
                if(!document.getElementById('fechaEntregaField').value){
                    toast.error('Debe seleccionar la fecha de entrega deseada', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000, // Duración de 5 segundos
                    });
                    return false
                }
                else{
                    const maxDate = new Date();
                    maxDate.setDate(maxDate.getDate() + 14)
                    const fechaEntrega = new Date(document.getElementById('fechaEntregaField').value)

                    if(fechaEntrega > maxDate){
                        toast.error('La fecha de entrega no puede ser mayor a 2 semanas', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 5000, // Duración de 5 segundos
                        });
                        return false
                    }

                }   
            }
            return true
        }
    }
    const submitHandler = () => {
        
        if(validateFields()){
            if(!isCartEmpty){
                toast.success('¡El pedido se ha realizado con éxito!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000, // Duración de 5 segundos
                });
            }
            else{
                toast.error('¡El Carrito esta vacio!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000, // Duración de 5 segundos
                });
            }
        }
    }

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-4">
                    <div className={`${styles.page}`}>
                        <div className={`${styles.formContainer}`}>
                            <CarritoCompra setIsCartEmpty={setIsCartEmpty} />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className={`${styles.page}`}>
                        <div className={`${styles.formContainer}`}>
                            <div className='inv'>
                                <h1 className={`inv text-center ${styles.titulo}`}>Pedido a Comercio Adherido</h1>
                            </div>
                                <div className='inv d-flex align-items-center justify-content-center'>
                                    <div className='row d-flex justify-content-center inv'>
                                        <div className='col-3 inv'>

                                            <div className='inv'>
                                                <h1 className={`inv text-center ${styles.subTitulo}`}>Domicilio</h1>
                                            </div>

                                            <div className='d-flex inv '>
                                                <div className='col-10 inv'>
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
                                                <div className='col-10 inv'>
                                                    <CiudadList setSelectedCiudad={setSelectedCiudad} />
                                                </div>
                                            </div>
                                            <div className='d-flex inv '>
                                                <div className='col-10 inv'>
                                                    <textarea
                                                        type="text"
                                                        id='refField'
                                                        name="referencia"
                                                        placeholder="Referencias (opcional)"
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
                                                                <Input as={InputMask} style={{ marginTop: '10px' }} onChange={handleChange} id='numTarjetaField' className='form-control' placeholder="Numero de Tarjeta" mask="9999-9999-9999-9999" maskChar={null} />
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
                                                                <Input as={InputMask} id="vencimientoTarjetaField" style={{ marginTop: '10px' }} className='form-control' placeholder="MM/AAAA" mask="99/9999" maskChar={null} />
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
                                                                <Input as={InputMask} id='cvvField' style={{ marginTop: '10px' }} className='form-control' placeholder="cvv" mask="999" maskChar={null} />
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
                                            <button onClick={submitHandler} className={`col-12 ${styles['btn-realizar-pedido']}`}>
                                                Realizar Pedido
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default RealizarPedido;