import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import  './modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {MdOutlineEnhancedEncryption } from 'react-icons/md';
 
function ManuelAddBankAccount({ setOpenModal }) {
  const [bankModalOpened, setBankModalOpened] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='content'>
          <h3> Manuel Banka Hesabı Ekle</h3>
          <Form>
            <Form.Group className="mb-3 forms" controlId="exampleForm.ControlInput1">
              <Form.Select
                autoFocus
                placeholder="Ülke"
              />
              <Form.Control
                type="text"
                placeholder="SWIFT/BIC"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 forms" controlId="exampleForm.ControlInput1">
              <Form.Select
                autoFocus
                placeholder="Para Birimi"
              />
              <Form.Control
                type="text"
                placeholder="ör. ABD Doları Birikim Hesabı"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Banka Adı"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Hesap Sahibinin Adı"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Hesap Numarası"
                autoFocus
              />
            </Form.Group>
            
            <div className='btns'>
              <Button className=" bt fund-button"  onClick={handleClose}>
                 Banka Hesabı Ekle
              </Button>
              <Button className=" bt fund-button cancel" style={{marginLeft:"32px"}}  onClick={handleClose}>
                 Vazgeç
              </Button>
              
            </div>
            
 
          </Form>
        </Modal.Body>
      </Modal>
     
    );
  }
  
  export default ManuelAddBankAccount;