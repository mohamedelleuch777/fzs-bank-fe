import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function CompanyInfoTabCard({Change}) {
    const { t, i18n } = useTranslation();
    
    return(

        <div className='company-card'>
            <div className='company-info'>
                <div>
                    <span className='company-name'>{t('company-title')}</span>
                </div>
                <div className='add-detail'>
                    <span>{t('add-company-info')}</span>
                    <Button onClick={() => Change(true)} className="fund-button" label={t('add-company-btn')} />
                </div>
             </div>
             <div className='company-info'>
                <div>
                    <span className='company-name'>{t('own')}</span>
                </div>
                <div className='add-detail'>
                    <span>{t('own-info')}</span>
                    <Button onClick={() => Change(true)} className="fund-button"  label={t('add-onw-btn')} />
                </div>
             </div>
             
        </div>
    )}