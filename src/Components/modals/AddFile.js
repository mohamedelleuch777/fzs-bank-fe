import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import  './modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

 
function AddFile({ setOpenModal }) {
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='content'>
          <h3>Belge Ekle</h3>
          <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Belge Adı"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="file"
                placeholder="Hesap Sahibinin Adı"
                autoFocus
              />
            </Form.Group>
            <div className='btns'>
              <Button className=" bt fund-button"  onClick={handleClose}>
                 Belge Ekle
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
  
  export default AddFile;