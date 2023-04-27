import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles.module.css'
import './Profile.css'

export default function ProfileCardInfo(){
    return(
        <div className='profile-info'>
        <div>FRONTEND LİMİTED</div>
        <div className='infos'>
            <div>
                <span>
                    <p>Web Site</p>
                    <p>https://envisionfintech.com</p>
                </span>
                <span>
                <p> Kayıt Tarihi</p>
                <p>https://envisionfintech.com</p>  
                </span>
            </div>
            <div>
                <span>İş Tipi</span>
                <span>Tamamen Çevrimiçi e-Ticaret / D2C</span>
            </div>
            <div>
                <span>Ülke</span>
                <span>Türkiye</span>
            </div>
        </div>
    </div>
    
    )
    

}