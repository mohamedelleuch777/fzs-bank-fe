import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import  './modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {MdOutlineEnhancedEncryption } from 'react-icons/md';
import ManuelAddBankAccount from './ManuelAddBankAccount'
import { useTranslation } from 'react-i18next';
 
function AddBankAccount({ setOpenModal }) {
  const { t, i18n } = useTranslation();
  const [bankModalOpened, setBankModalOpened] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='content'>
          <h3>{t('add-bank-btn')}</h3>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                autoFocus
              >
                <option>{t('select-bank')}</option>
              </Form.Select>
            </Form.Group>
            <div className='btns forms'>
              <Button className=" bt fund-button cancel"  onClick={handleClose}>
              {t('cancel')}
              </Button>
              <Button className=" bt fund-button" style={{marginLeft:"16px"}} onClick={handleClose}>
                {t('btn-con')}
              </Button>
            </div>
            {bankModalOpened && <ManuelAddBankAccount  setOpenModal={setBankModalOpened}/>}
 
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className='info'>
              <span>
                <MdOutlineEnhancedEncryption/>
                {t('crpty')}
              </span>
            </div>
        </Modal.Footer>
      </Modal>
     
    );
  }
  
  export default AddBankAccount;