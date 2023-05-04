import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';

export default function CompanyInfoTabCard() {
    return(

        <div className='company-card'>
            <h5>Şirket Bilgileriniz</h5>
            <p>Lütfen aşağıda doğru şirket bilgilerini sağladığınızdan emin olun.</p>
            <div className='company-info'>
                <div>
                    <span className='company-name'>Business Details</span>
                </div>
                <div className='add-detail'>
                    <span>Lütfen işletmeniz hakkında doğru bilgiler verin.</span>
                    <Button className="fund-button" label="İşletme Ayrıntılarını Ekleyin" />
                </div>
             </div>
             <div className='company-info'>
                <div>
                    <span className='company-name'>Yönetim ve Mülkiyetler</span>
                </div>
                <div className='add-detail'>
                    <span>Lütfen işletmenizin en az %25'ine sahip olan herhangi bir kişi veya kuruluşu ekleyin. "Hiçbir hissedarın %25'ten fazla hisseye sahip olmaması durumunda lütfen kilit personeli ekleyin, örneğin CEO veya Genel Müdür</span>
                    <Button className="fund-button" label="İşletme Sahipleri Ekle" />
                </div>
             </div>
             
        </div>
    )}