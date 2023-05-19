import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import {BsThreeDots } from 'react-icons/bs';

export default function UserManagmentTabCard() {
    return(
        <div className='profile-card'>
            <h5>Kullanıcı Yönetimi</h5>
             <div className='pass-change'>
                <div>
                    <span className='company-name'>Kullanıcı Yönetimi</span>
                </div>
                <form>
                    <div className='form-element'>
                        <div>
                            <label style={{marginBottom:"10px"}}>İş Eposta Adresi</label>
                            <input className='form-control' type="email" name="email" />
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Button  style={{width:"49%"}} className="fund-button" label="Davet Gönder" />
                            <Button style={{width:"49%"}} className="fund-button cancel" label="Vazgeç" />
                        </div>
                       
                   
                    </div>
                </form>
             </div>
             <h5>Kullanıcı Kayıtları</h5>
             <div className='pass-change'>
             <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Rolü</th>
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