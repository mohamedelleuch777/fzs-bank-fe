import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import  './modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

 
function AddFile({ setOpenModal }) {
  const { t, i18n } = useTranslation();
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='content'>
          <h3>{t('add-file')}</h3>
          <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder={t('file-name')}
                autoFocus
              />
            </Form.Group>
            <div tabIndex={0} role="presentation">
               <input className='form-control' multiple type="file" name="add-file" tabIndex={1} style={{display:"none"}} />
                <div className='add-file' style={{fontSize:"14px"}}>
                    {t('surukle')}
                </div>
            </div>
            <div className='btns forms'>
              <Button className=" bt fund-button"  onClick={handleClose}>
                {t('add-btn')}
              </Button>
              <Button className=" bt fund-button cancel" style={{marginLeft:"32px"}}  onClick={handleClose}>
                {t('cancel')}
              </Button>
              
            </div>
            
 
          </Form>
        </Modal.Body>
      </Modal>
     
    );
  }
  
  export default AddFile;