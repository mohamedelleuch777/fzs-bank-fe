import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'

export default function AccountInfoTabCard() {
    return(
        <div className='account-card'>
            <h5>Hesap Bilgileriniz</h5>
            <div className='account-form'>
                <span className='company-name'>Hesap Bilgileri</span>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>Adınız</label>
                            <input className='form-control' type="text" name="firstName" value={"RENGİN"}/>
                        </div>
                        <div>
                            <label>Soyadınız</label>
                            <input className='form-control' type="text" name="lastName" value={"ALKAN"}/>
                        </div>
                        <div>
                            <label> İş Telefonu</label>
                            <input className='form-control' type="tel" name="phone" value={"+90546 737 49 45"}/>
                        </div>
                        <div>
                            <label>İş Maili</label>
                            <input className='form-control' type="email" name="email" value={"renginalkan12@gmail.com"}/>
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