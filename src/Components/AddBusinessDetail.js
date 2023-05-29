import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function AddBusinessDetails() {
    const { t, i18n } = useTranslation();
    return(
        <div className='account-card'>
            <div className='account-form'>
                <span className='company-name'>{t('title-add-company')}</span>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>{t('ticaret')}</label>
                            <input className='form-control' type="text" name="company-name" />
                        </div>
                        <div>
                            <label>{t('marka')}</label>
                            <input className='form-control' type="text" name="mark-name"/>
                        </div>
                        <div>
                            <label> {t('company-type')}</label>
                            <select className='form-control form-select' name="business-type" >
                                <option>
                                    {t('personel-company')}
                                </option>

                            </select>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <label> {t('vkn')}</label>
                                <input className='form-control' type="text" name="vkn" />
                            </div>
                            <div style={{width:"49%"}}>
                                <label> {t('start-date')}</label>
                                <input className='form-control' type="date" name="start-date" />
                        </div>
                        </div>
                    </div>
                    <div className='form-element'>
                        <div>
                            <label>İş Yeri Adresi</label>
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
                        
                    </div>
                    <div className='form-element'>
                        
                            <label>{t('sales-address')}</label>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <input type="checkbox" id="scales" name="scales" style={{display:"block",width:"5%",marginRight:"5px"}} />
                            <label for="scales"> {t('address-check')}</label>
                            </div>
                          
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
                    <div className='form-element'>
                    <div>
                            <label> {t('work-scale')}</label>
                            <select className='form-control form-select' name="work-scale" >
                                <option>
                                    {t('mikro')}
                                </option>
                                <option>
                                    {t('small')}
                                </option>

                            </select>
                        </div>
                        <div>
                            <label> {t('sales-type')}</label>
                            <select className='form-control form-select' name="sales-type" >
                                <option>{t('type1')}</option>
                                <option>{t('type2')}</option>
                                <option>{t('type3')}</option>
                                <option>{t('type4')}</option>
                                <option>{t('type5')}</option>
                                <option>{t('type6')}</option>
                            </select>
                        </div>
                        <div>
                            <label>{t('phone-number')}</label>
                            <input className='form-control' type="text" name="phone-number" />
                        </div>
                        <div>
                            <label>{t('mail-u')}</label>
                            <input className='form-control' type="text" name="mail" />
                        </div>
                        <div>
                            <label style={{fontSize:"20px"}}>{t('add-file')}</label>
                        </div>
                        <p style={{fontSize:"18px"}}>{t('gerekli')}</p>
                        <p style={{fontSize:"16px"}}>1. {t('add-file-type1')}</p>
                        <p style={{fontSize:"16px"}}>2. {t('add-file-type2')}</p>
                        <div tabIndex={0} role="presentation">
                            <input className='form-control' multiple type="file" name="add-file" tabIndex={1} style={{display:"none"}} />
                            <div className='add-file' style={{fontSize:"14px"}}>
                                {t('surukle')}
                            </div>
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