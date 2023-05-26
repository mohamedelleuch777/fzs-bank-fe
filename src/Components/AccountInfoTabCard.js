import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';

export default function AccountInfoTabCard() {
    const { t, i18n } = useTranslation();
    return(
        <div className='account-card'>
            <h5>{t('tab1-title')}</h5>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>{t('name')}</label>
                            <input className='form-control' type="text" name="firstName" value={"RENGİN"}/>
                        </div>
                        <div>
                            <label>{t('lastname')}</label>
                            <input className='form-control' type="text" name="lastName" value={"ALKAN"}/>
                        </div>
                        <div>
                            <label> {t('phone')}</label>
                            <input className='form-control' type="tel" name="phone" value={"+90546 737 49 45"}/>
                        </div>
                        <div>
                            <label>{t('email')}</label>
                            <input className='form-control' type="email" name="email" value={"renginalkan12@gmail.com"}/>
                        </div>
                   
                    </div>
                </form>
            </div>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>{t('a-name')}</label>
                            <input className='form-control' type="text" name="company" value={"Fronten Limited"}/>
                        </div>
                        <div>
                            <label>{t('w-site')}</label>
                            <input className='form-control' type="text" name="website" value={"https://envisionfintech.com"}/>
                        </div>
                        <div>
                            <label>{t('aylik')} </label>
                            <input className='form-control' type="text" name="revenue" value={"10K - 100K"}/>
                        </div>
                        <div>
                            <label>{t('work-type1')} </label>
                            <input className='form-control' type="text" name="work-type" value={"Purely online (eCommerce / D2C)"}/>
                        </div>
                   
                    </div>
                </form>
            </div>
        
        </div>
    
    )


  }