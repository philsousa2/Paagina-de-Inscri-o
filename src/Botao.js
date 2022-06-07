import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Formulario from './Formulario';
import './App.css';

const Botao = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>
     <button variant="primary" type="submit" className="button" onClick={handleShow}>
      SE INSCREVER
     </button>


      <Modal   show={show} centered onHide={handleClose}>
      
        <Modal.Body className="containerFormulario">
            <Formulario />

            <button   className="btFecharFormulario" onClick={handleClose}>
           Fechar
          </button>
        </Modal.Body>
        
      </Modal>


      </>
  )
}

export default Botao
