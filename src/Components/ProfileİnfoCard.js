import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles.module.css'
import './Profile.css'
import{FaCertificate}from 'react-icons/fa';

export default function ProfileCardInfo(){
    return(
        <div className='profile-info'>
        <div className='company-name'><FaCertificate/>FRONTEND LİMİTED</div>
        <div className='infos'>
            <div className='info'>
                <span>
                    <p className='title'>Web Site</p>
                    <p>https://envisionfintech.com</p>
                </span>
                <span className='element'>
                <p className='title '> Kayıt Tarihi</p>
                <p>12 Mar 2023</p>  
                </span>
            </div>
            <div>
                <span className='title'>İş Tipi</span>
                <p>Tamamen Çevrimiçi e-Ticaret / D2C</p>
            </div>
            <div>
                <span className='title'>Ülke</span>
                <p>Türkiye</p>
            </div>
        </div>
    </div>
    
    )
    

}