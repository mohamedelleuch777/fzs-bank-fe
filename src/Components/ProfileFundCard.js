import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles.module.css'
import './Profile.css'
import{FaCertificate}from 'react-icons/fa';
import Button from './button';

export default function ProfileFundCard(){
    return(
        <div className='profile-info'>
        <div className='company-name'>Fon Başvuru Özeti</div>
        <div className='fund-info'>
            <div className='info'>
                <span>
                    <p className='title'>Bekleyen Yatırım İncelemesi</p>
                    <p>Başvurunuz inceleniyor. Bir ön koşul sayfası almak için lütfen gelir doğrulamaları için daha fazla ticari ve finansal bilgi sağlamaya devam edin.</p>
                </span> 
                
            </div>
            <div>
            <Button className="fund-button" label="Devam Et" />
            </div>
        </div>
        <div className='investment'>
            <div className='info'>
                <span>
                    <p className='company-name'>Teklif Detaylarım</p>
                </span> 
            <div>
                <div>
                    <span>
                        <p className='company-name'>Teklif Detaylarım</p>
                    </span> 
                    <span>
                        <p className='company-name'>Teklif Detaylarım</p>
                    </span> 
                    <span>
                        <p className='company-name'>Teklif Detaylarım</p>
                    </span> 
                </div>
            </div>
            <div>
            <Button className="fund-button" label="Devam Et" />

            </div>
            </div>
        </div>
    </div>
    
    )
    

}