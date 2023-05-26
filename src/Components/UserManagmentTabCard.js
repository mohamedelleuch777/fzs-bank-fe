import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import {BsThreeDots } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


export default function UserManagmentTabCard() {
  const { t, i18n } = useTranslation();
    return(
        <div className='profile-card'>
             <div className='pass-change'>
                <div>
                    <span className='company-name'>{t('new-user')}</span>
                </div>
                <form>
                    <div className='form-element'>
                        <div>
                            <label style={{marginBottom:"10px"}}>{t('mail-u')}</label>
                            <input className='form-control' type="email" name="email"  placeholder={t('add-user-info')}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Button  style={{width:"49%"}} className="fund-button" label={t('add-user-btn')} />
                            <Button style={{width:"49%"}} className="fund-button cancel" label={t('cancel')} />
                        </div>
                       
                   
                    </div>
                </form>
             </div>
             <h5>{t('regis')}</h5>
             <div className='pass-change'>
             <table class="table">
                <thead>
                  <tr>
                    <th scope="col">{t('eposta')}</th>
                    <th scope="col">{t('tel')}</th>
                    <th scope="col">{t('first-name')}</th>
                    <th scope="col">{t('lastName')}</th>
                    <th scope="col">{t('own-type')}</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>envisionfintech@gmail.com	</td>
                    <td>5467374945</td>
                    <td>Mehmet</td>
                    <td>Bey</td>
                    <td>Müşteri</td>
                    <td><BsThreeDots/></td>
                  </tr>
                  
                </tbody>
              </table>

            
             </div>
        </div>
    )
}