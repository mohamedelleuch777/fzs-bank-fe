import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import Button from './button';
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';

export default function FunApplicationBusinessTab() {
    const { t, i18n } = useTranslation();
    return (
        <div className='account-card'>
            <h5>{t('fund-info')}</h5>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <label>{t('name')}</label>
                                <input className='form-control' type="text" name="firstName" />
                            </div>
                            <div style={{width:"49%"}}>
                                <label>{t('lastname')}</label>
                                <input className='form-control' type="text" name="lastName" />
                        </div>
                            
                        </div>
                       
                        <div>
                            <label> {t('tc')}</label>
                            <input className='form-control' type="text" name="tck" />
                        </div>
                        <div>
                            <label>{t('ticaret')}</label>
                            <input className='form-control' type="text" name="company-name" />
                        </div>
                        <div>
                            <label> {t('vkn')}</label>
                            <input className='form-control' type="text" name="vkn" />
                        </div>
                        <div>
                            <label> {t('sales-type-fund')}</label>
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
                            <label>{t('gelir-ulke')}</label>
                            <select className='form-control form-select'  name="majority-revenue" ></select>
                        </div>
                        <div>
                        <label>{t('aylik-gelir')}</label>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:0}}>
                            <div style={{width:"29%",margin:0}}>
                                <input className='form-control' type="text" name="earning-type " value={"TL"}/>
                                  
                            </div>
                            <div style={{width:"69%", margin:0}}>
                                <input className='form-control' type="text" name="amount" />
                            </div>
                        </div>
                        </div>
                        <Button className="fund-button" label={t('fund-btn1')} />
                    </div>
                </form>
            </div>
        </div>
    )}