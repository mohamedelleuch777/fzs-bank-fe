import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'

export default function AddBusinessDetails() {
    return(
        <div className='account-card'>
            <h5>Hesap Bilgileriniz</h5>
            <div className='account-form'>
                <span className='company-name'>İşletme Bilgileri</span>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>Ticaret Ünvanı</label>
                            <input className='form-control' type="text" name="company-name" value={"RENGİN"}/>
                        </div>
                        <div>
                            <label>Marka Adı</label>
                            <input className='form-control' type="text" name="mark-name" value={"ALKAN"}/>
                        </div>
                        <div>
                            <label> Şirket Türü</label>
                            <select className='form-control form-select' name="business-type" value={"+90546 737 49 45"}>
                                <option>
                                    Şahıs Şirketi
                                </option>

                            </select>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"49%"}}>
                                <label>Vergi Kimlik No</label>
                                <input className='form-control' type="text" name="vkn" />
                            </div>
                            <div style={{width:"49%"}}>
                                <label>İşe Başlama Tarihi</label>
                                <input className='form-control' type="date" name="start-date" />
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='account-form'>
                <span className='company-name'>Diğer Hesap Bilgileri</span>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>Hesap Adı</label>
                            <input className='form-control' type="text" name="company" value={"Fronten Limited"}/>
                        </div>
                        <div>
                            <label>İşletmenin Web Sitesi</label>
                            <input className='form-control' type="text" name="website" value={"https://envisionfintech.com"}/>
                        </div>
                        <div>
                            <label> Menşei ülke</label>
                            <input className='form-control' type="text" name="country" value={"Türkiye"}/>
                        </div>
                        <div>
                            <label>Aylık Gelir </label>
                            <input className='form-control' type="text" name="revenue" value={"10K - 100K"}/>
                        </div>
                        <div>
                            <label>İş Türü </label>
                            <input className='form-control' type="text" name="work-type" value={"Purely online (eCommerce / D2C)"}/>
                        </div>
                   
                    </div>
                </form>
            </div>
        
        </div>
    
    )


  }