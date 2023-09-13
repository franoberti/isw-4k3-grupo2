import React from 'react';

const CiudadList = ({ setSelectedCiudad, calcularCostoEnvio }) => {
    const handleSelectedCiudad = (event) => {
        setSelectedCiudad(event.target.value);
        calcularCostoEnvio();
    };
    return (
        <select id="comboBoxCiudad" onChange={handleSelectedCiudad} className='form-select' style={{ marginTop: '10px' }}>
            <option disabled selected value="none">Ciudad</option>
            <option value="Villa Carlos Paz">Villa Carlos Paz</option>
            <option value="Santa Rosa de Calamuchita">Santa Rosa de Calamuchita</option>
            <option value="Villa General Belgrano">Villa General Belgrano</option>
            <option value="Cosquín">Cosquín</option>
            <option value="Mina Clavero">Mina Clavero</option>
            <option value="Nono">Nono</option>
        </select>
    );
}

export default CiudadList;
