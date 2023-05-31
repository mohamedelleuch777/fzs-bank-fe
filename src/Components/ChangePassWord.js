import React from 'react';
import ReactDOM from 'react-dom';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function ChangePass({Change}) {
    const { t, i18n } = useTranslation();
    return(
        <div className='account-card'>
            <h5>{t('pass-btn')}</h5>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>{t('pass-curreny')}</label>
                            <input className='form-control' type="password" name="pass-old" />
                        </div>
                        <div>
                            <label>{t('new-pass')}</label>
                            <input className='form-control' type="password" name="pass-new"/>
                        </div>
                        <div>
                            <label> {t('new-pass1')}</label>
                            <input className='form-control' type="password" name="pass-new-2"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Button  style={{width:"49%"}} className="fund-button" label={t('pass-btn')} />
                            <Button style={{width:"49%"}}onClick={(e) => Change("0")} className="fund-button cancel" label={t('cancel')} />
                        </div>
                       
                   
                    </div>
                </form>
            </div>
        </div>
    )}