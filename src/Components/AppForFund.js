import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import Button from './button';
import styles from './styles.module.css'
import BankAccountsTabCard from './BankAccountsTabCard'
import AddEkstre from './modals/AddEkstre'
import { useTranslation } from 'react-i18next';
import AddReports from './modals/AddReports';

export default function AppForFunding() {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalOpened2, setModalOpened2] = useState(false);
    const { t, i18n } = useTranslation();
    return (
        <div className='account-card'>
            <h3>{t('title4')}</h3>
            <h6>{t('gelir-info-1')}</h6>
            <div className='account-form'>
                <span className='company-name'>{t('hesap')}</span>
                <h6>{t('ekstre-info')}</h6>
                <Button className="fund-button"  onClick={() => setModalOpened(true)} label={t('ekstre-btn')} />
                {modalOpened && <AddEkstre  setOpenModal={setModalOpened}/>}
            </div>
            
           
            <div className='account-form'>
                <span className='company-name'>{t('sales-report')}</span>
                <h6>{t('rapor-info')}</h6>
                 <Button className="fund-button" onClick={() => setModalOpened2(true)} label={t('rapor-btn')} />
                 {modalOpened2 && <AddReports  setOpenModal={setModalOpened2}/>}
            </div>
            <h4 style={{marginTop:"3rem"}}>{t('entegre')}</h4>
            <div className='account-form'>
                <span className='company-name'>{t('pazarlama')}</span>
                <div className='platform-card'> Google Analytics</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>{t('odeme')}</span>
                <div className='platform-card'> Stripe</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>{t('reklam')}</span>
                <div className='platform-card'> Google ADS</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>{t('muhasebe')}</span>
                <div className='platform-card'> MUPA</div>
            </div>
            
        </div>
    )}