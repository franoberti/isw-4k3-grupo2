import React from 'react';
import styles from './navBar.module.css'
import logo from '../../assets/logo-utn.png'

const NavBar = () => {
    return (
        <div className={`${styles.navBar} d-flex justify-content-between align-items-center`}>
            <h6 style={{ marginBottom: '0px', marginLeft: '30px' }} className='inv' >User Story: Realizar Pedido a Comercio Adherido</h6>
            <img src={logo} alt="logo" className='inv' height={50} style={{ margin: '8px' }} />
        </div>

    );
};

export default NavBar;