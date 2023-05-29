import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import Button from './button';
import styles from './styles.module.css'
import BankAccountsTabCard from './BankAccountsTabCard'
export default function AppForFunding() {
    return (
        <div className='account-card'>
            <h3>Gelirlerini Doğrula</h3>
            <h6>Mali bilgileriniz, finansman uygunluğunuzu belirleyecektir. Banka hesaplarınızı / ekstrelerinizi ve satış raporlarınızı eklemek, mümkün olan en fazla finansmanı almanızı sağlayacaktır.</h6>
            <BankAccountsTabCard/>
            <div className='account-form'>
                <span className='company-name'>Satış Raporları</span>
                <h6>Gerçekleştirdiğiniz satışları doğrulamak amacıyla e-ticaret sitelerinden elde ettiğiniz satış raporlarını yükleyin. En az son 6 ayda yapılan satışları gösteren raporları yüklemeniz gerekmektedir.</h6>
                 <Button className="fund-button" label="Rapor Yükle" />
                 
            </div>
            <div className='account-form'>
                <span className='company-name'>Pazarlama Platformu Entegrasyonu</span>
                <div className='platform-card'> Google Analytics</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>Ödeme Platformu Entegrasyonu</span>
                <div className='platform-card'> Stripe</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>Reklam Platformu Entegrasyonu</span>
                <div className='platform-card'> Google ADS</div>
            </div>
            <div className='account-form'>
                <span className='company-name'>Muhasebe Platformu Entegrasyonu</span>
                <div className='platform-card'> MUPA</div>
            </div>
            
        </div>
    )}