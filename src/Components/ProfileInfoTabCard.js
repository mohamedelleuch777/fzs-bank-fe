import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function ProfileInfoTabCard({Change}) {
    const { t, i18n } = useTranslation();
    return(
        <div className='profile-card'>
             <div className='pass-change'>
                <div>
                    <span className='company-name'>{t('pass')}</span>
                </div>
                <div className='change'>
                    <span>{t('pass-info')}</span>
                   <Button onClick={() => Change(true)} className="fund-button" label={t('pass-btn')} />
                  
                </div>
             </div>
        </div>
    )
}