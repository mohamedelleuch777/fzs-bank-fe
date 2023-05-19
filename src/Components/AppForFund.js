import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import Button from './button';
import styles from './styles.module.css'

export default function AppForFunding() {
    return (
        <div className='account-card'>
            <h3>Finansman İçin Başvur</h3>
            <div className='account-form ac'>
                <span className='company-name'>Hesap Hareketleri</span>

                <h4>Bize Finansal Bilgilerinizi Verin</h4>
                <h6>Mali bilgileriniz, finansman uygunluğunuzu belirleyecektir. Banka hesaplarınızı ve ekstrelerinizi eklemek, mümkün olan en fazla sermayeyi almanızı sağlayacaktır.</h6>
                <h5>Banka Hesapları</h5>
                <div className='bank'></div>

                <Button className="fund-button"  label="Banka Hesabı Ekle" />
            </div>
            <div className='account-form'>
                <span className='company-name'>Satış Raporları</span>
                 <Button className="fund-button" label="Rapor Yükle" />
            </div>
            <div className='account-form'>
                <span className='company-name'>Satış Platformu Entegrasyonu</span>
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