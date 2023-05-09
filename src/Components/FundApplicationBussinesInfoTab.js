import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'

export default function FunApplicationBusinessTab() {
    return (
        <div className='account-card'>
            <h5>Finansman ve büyüme çözümlerini etkinleştirmek için işletmenizi anlamamıza ve bir ön finansman tutarı almamıza yardımcı olun.</h5>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <label>Adınız</label>
                                <input className='form-control' type="text" name="firstName" />
                            </div>
                            <div style={{width:"49%"}}>
                                <label>Soyadınız</label>
                                <input className='form-control' type="text" name="lastName" />
                        </div>
                            
                        </div>
                       
                        <div>
                            <label> İşletme Adı</label>
                            <input className='form-control' type="text" name="business-name" />
                        </div>
                        <div>
                            <label>Kuruldukları Ülkeler</label>
                            <input className='form-control' type="text" name="country" />
                        </div>
                        <div>
                            <label>Çevrimiçi gelir elde ediyor musunuz?</label>
                            <input className='form-control' type="text" name="revenue" />
                        </div>
                        <div>
                            <label>Gelirinizin çoğunluğu hangi ülkeden geliyor?</label>
                            <input className='form-control' type="text" name="majority-revenue" />
                        </div>
                        <div>
                        <label>İstediğiniz fonlama tutarını girin *</label>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:0}}>
                            <div style={{width:"29%",margin:0}}>
                                <select className='form-control form-select' type="text" name="earning-type">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>TL</option>
                                </select>
                            </div>
                            <div style={{width:"69%", margin:0}}>
                                <input className='form-control' type="text" name="amount" />
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )}