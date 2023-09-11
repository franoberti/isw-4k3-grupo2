import React from 'react';

const CiudadList = () => {
    return (
        <select id="comboBoxCiudad" className='form-select' style={{ marginTop: '10px' }}>
            <option disabled selected value="none">Ciudad</option>
            <option value="">Villa Carlos Paz</option>
            <option value="">Santa Rosa de Calamuchita</option>
            <option value="">Villa General Belgrano</option>
            <option value="">Cosquín</option>
            <option value="">Mina Clavero</option>
            <option value="">Nono</option>
        </select>
    );
}

export default CiudadList;
