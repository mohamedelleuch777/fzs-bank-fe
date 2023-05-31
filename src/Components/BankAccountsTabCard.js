import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import AddBankAccount from './modals/AddBankAccount'
import ManuelAddBankAccount from './modals/ManuelAddBankAccount';
import { useTranslation } from 'react-i18next';

export default function BankAccountsTabCard() {
    const { t, i18n } = useTranslation();
    const [modalOpened, setModalOpened] = useState(false);
    return(
        <>
        <h1>{t('tum-hesap')}</h1>
        <div className='tum-hesap'>
            <h5 className='company-name'>{t('add-bank-btn')}</h5>
            <div className='bank'></div>

            <Button className="fund-button" onClick={() => setModalOpened(true)} label="Banka Hesabı Ekle" />
            
            {modalOpened && <AddBankAccount  setOpenModal={setModalOpened}/>}
        </div>
        </>
    )}