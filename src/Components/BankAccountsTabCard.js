import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';

export default function BankAccountsTabCard() {
    return(
        <div className='accounts-bank'>
            <h4>Bize Finansal Bilgilerinizi Verin</h4>
            <h6>Mali bilgileriniz, finansman uygunluğunuzu belirleyecektir. Banka hesaplarınızı ve ekstrelerinizi eklemek, mümkün olan en fazla sermayeyi almanızı sağlayacaktır.</h6>
            <h5>Banka Hesapları</h5>
            <div className='bank'></div>
            <Button className="fund-button" label="Banka Hesabı Ekle" />
        </div>
    )}