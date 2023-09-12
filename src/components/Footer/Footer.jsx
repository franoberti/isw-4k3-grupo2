import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className="container inv">
        <div className="row justify-content-center inv">
          <div className="col text-center inv">
            <p className={`${styles.title} inv`} style={{ marginBottom: 0 }}>Grupo 2</p>
          </div>
        </div>
        <div className="row justify-content-center inv">
          <div className="col inv">
            <p className={`${styles.subTitle} inv`} style={{ marginBottom: 0 }}>Integrantes:</p>
            <div className={`${styles.integrantes} inv row justify-content-center`}>
              <div className="col-6 inv">
                <p className='m-0 inv'>- Bouza Victor; Legajo: 89248</p>
                <p className='m-0 inv'>- Guzman Sol; Legajo: 85504</p>
                <p className='m-0 inv'>- Hosman Ramiro; Legajo: 87013</p>

              </div>
              <div className="col-6 inv">
                <p className='m-0 inv'>- Lozada Gonzalo; Legajo: 65329</p>
                <p className='m-0 inv'>- Mendibe Bautista; Legajo: 89249</p>
                <p className='m-0 inv'>- Oberti Francisco; Legajo: 71915</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;