import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function AddOwn() {
    const { t, i18n } = useTranslation();
    return(
        <div className='account-card'>
            <div className='account-form'>
                <span className='company-name'>{t('add-own')}</span>
                <form>
                    <div className='form-element'>
                     
                        <div>
                            <label> {t('own-type')}</label>
                            <select className='form-control form-select' name="own-type" >
                                <option>
                                    {t('signature-own')}
                                </option>

                            </select>
                        <div>
                            <label>{t('name')}</label>
                            <input className='form-control' type="text" name="firstName" />
                        </div>
                        <div>
                            <label>{t('lastname')}</label>
                            <input className='form-control' type="text" name="lastName" />
                        </div>
                        <div>
                            <label>{t('job')}</label>
                            <input className='form-control' type="text" name="job"/>
                        </div>
                        <div >
                                <label> {t('birthday')}</label>
                                <input className='form-control' type="date" name="start-date" />
                        </div>
                        </div>
                    </div>
                    <div className='form-element'>
                        <div>
                            <label>{t('address')}</label>
                            <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <select  className='form-control form-select address'  name="city" ><option>{t('city')}</option></select>
                                <select className='form-control form-select address' name="dicsrit" ><option>{t('district')}</option></select>
                                <select className='form-control form-select'  name="neig"><option>{t('neig')}</option></select>
                            </div>
                            <select className='form-control form-select' name="street" >
                                <option>
                                    {t('street')}
                                </option>
                            </select>
                            <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <select  className='form-control form-select address'  name="door-number" ><option>{t('number')}</option></select>
                                <select  className='form-control form-select' name="apartment" ><option>{t('apartment')}</option></select>
                                </div>
                            <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <select className='form-control form-select address'  name="blok"><option>{t('blok')}</option></select>
                                <select className='form-control form-select'  name="daire"><option>{t('daire')}</option></select>
                            </div>
                        </div>
                        <div>
                            <label>{t('dogrulama')}</label>
                            <input className='form-control' type="text" name="tck"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Button  style={{width:"230px"}} className="fund-button " label={t('save-btn')}/>
                            <Button style={{width:"230px"}} className="fund-button cancel" label={t('cancel')} />
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        
        </div>
    
    )


  }