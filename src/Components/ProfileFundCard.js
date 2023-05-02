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
                    <div className='teklif'>
                        <div className='info'>
                            <span className='company-name'>
                                 Teklif Detaylarım
                             </span> 
                            <div style={{display:"flex",justifyContent:"space-between", width:"500px"}}>
                                <span className='element'>
                                     <p>Fon Tutarı</p>
                                     <p>USD 0</p>
                                 </span> 
                                 <span className='element'>
                                     <p>Toplam Havale Tutarı</p>
                                 </span> 
                                 <span className='element'>
                                     <p>Havale Oranı</p>
                                 </span>
                            </div>
                        </div>
                         <div style={{borderLeft:"solid 1px rgb(218 218 218)",paddingLeft:"20px", marginLeft:"100px"}}>
                             <span className='company-name'>
                             Talep Ettiğim Miktar
                            </span> 
                             <div className='teklif'>
                                 <span className='element'>
                                     <p>Talep Edilen Fon Tutarı</p>
                                     <p>USD 15,000.00</p>
                            </span> 
                        </div>
                 
                 </div>
                     </div>
                     
                
                
              
             </div>
        
        </div>
    
    )
    

}