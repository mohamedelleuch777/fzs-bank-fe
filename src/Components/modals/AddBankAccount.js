import React from 'react';
import ReactDOM from 'react-dom';
import  './modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {MdOutlineEnhancedEncryption } from 'react-icons/md';
 
function AddBankAccount({ setOpenModal }) {
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='content'>
          <h3>Banka Hesabı Ekle</h3>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                autoFocus
              />
            </Form.Group>
            <p style={{marginLeft:"18px 0px"}}>Bankanızı arayamıyor musunuz? <Link>Buraya manuel olarak ekleyin</Link></p>
            <div className='btns'>
              <Button className=" bt fund-button cancel"  onClick={handleClose}>
                 Vazgeç
              </Button>
              <Button className=" bt fund-button" style={{marginLeft:"16px"}} onClick={handleClose}>
                 Devam
              </Button>
            </div>
 
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className='info'>
              <span>
                <MdOutlineEnhancedEncryption/>
               Bilgilerinizin aktarımı uçtan uca şifrelenir
              </span>
            </div>
        </Modal.Footer>
      </Modal>
     
    );
  }
  
  export default AddBankAccount;