import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles.module.css'
import './Profile.css'
import{FaCertificate}from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ProfileCardInfo(){
    const { t, i18n } = useTranslation();
    return(
        <div className='profile-info'>
        <div className='company-name'><FaCertificate/>FRONTEND LİMİTED</div>
        <div className='infos'>
           
            <span>
                 <p className='title'>{t('site')}</p>
                <p>https://envisionfintech.com</p>
            </span>
            
            <span>
                <p className='title'>{t('work-type')}</p>
                <p>Tamamen Çevrimiçi e-Ticaret / D2C</p>
            </span>
            <span className=''>
            <p className='title '>{t('save-date')}</p>
            <p>12 Mar 2023</p>  
            </span>
           
        </div>
    </div>
    
    )
    

}