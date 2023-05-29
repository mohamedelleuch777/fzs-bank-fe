import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles.module.css'
import './Profile.css'
import{FaCertificate}from 'react-icons/fa';
import Button from './button';
import { useTranslation } from 'react-i18next';
export default function ProfileFundCard(){
    const { t, i18n } = useTranslation();
    return(
        <div className='profile-info'>
            <div className='company-name'>{t('fund-summary')}</div>
            <div className='fund-info'>
                <div className='info'>
                     <span>
                         <p className='title'>{t('wait-fund')}</p>
                         <p>{t('profile-fund-info')}</p>
                     </span> 
                
                </div>
                 <div>
                 <Button className="fund-button" label={t('btn-con')}  />
                 </div>
             </div>
             <div className='investment'>
                    <div className='teklif'>
                        <div className='info'>
                            <span className='company-name'>
                                 {t("offer-title")}
                             </span> 
                            <div style={{display:"flex",justifyContent:"space-between", width:"600px"}}>
                                <span className='element'>
                                     <p>{t('sonuc')}</p>
                                     <p>TL</p>
                                 </span> 
                                 <span className='element'>
                                     <p>{t('success-fund')}</p>
                                 </span> 
                                 <span className='element'>
                                     <p>{t('oran')}</p>
                                 </span>
                            </div>
                        </div>
                         <div style={{borderLeft:"solid 1px rgb(218 218 218)",paddingLeft:"20px", marginLeft:"100px", marginTop:"20px"}}>
                             <span className='company-name'>
                                <p>{t('request-f')}</p>
                            </span> 
                             <div className='teklif'>
                                 <span className='element'>
                                     <p style={{fontSize:"40px"}}> TL 15,000.00</p>
                            </span> 
                        </div>
                 
                 </div>
                     </div>
                     
                
                
              
             </div>
        
        </div>
    
    )
    

}