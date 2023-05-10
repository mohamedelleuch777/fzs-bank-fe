import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import AddBankAccount from './modals/AddBankAccount'


export default function BankAccountsTabCard() {
    const [modalOpened, setModalOpened] = useState(false);
    return(
        <div className='accounts-bank'>
            <h4>Bize Finansal Bilgilerinizi Verin</h4>
            <h6>Mali bilgileriniz, finansman uygunluğunuzu belirleyecektir. Banka hesaplarınızı ve ekstrelerinizi eklemek, mümkün olan en fazla sermayeyi almanızı sağlayacaktır.</h6>
            <h5>Banka Hesapları</h5>
            <div className='bank'></div>

            <Button className="fund-button" onClick={() => setModalOpened(true)} label="Banka Hesabı Ekle" />
            
            {modalOpened && <AddBankAccount  setOpenModal={setModalOpened}/>}
        </div>
    )}