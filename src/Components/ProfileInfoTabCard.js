import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { Link } from 'react-router-dom';

export default function ProfileInfoTabCard({Change}) {
    return(
        <div className='profile-card'>
             <div className='pass-change'>
                <div>
                    <span className='company-name'>Güvenlik</span>
                </div>
                <div style={{marginTop:"10px"}}><span>Password</span></div>
                <div className='change'>
                    <span>Set a strong password to keep your account safe</span>
                   <Button onClick={() => Change(true)} className="fund-button" label="Şifre Değiştir" />
                  
                </div>
             </div>
        </div>
    )
}