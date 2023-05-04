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
                    <span className='company-name'>Hesap Genelinde İki Faktörlü Kimlik Doğrulaması {"(2FA)"}</span>
                </div>
                <div className='fa2'>
                    <span>Hesap genelinde 2FA'yı etkinleştirmek için lütfen önce kendi 2FA'nızı ayarlayın. Kurulduktan sonra, her oturum açma için 2FA gerekli olacaktır</span>
                    <Button className="fund-button " label="2FA Kurulumu" />
                </div>
             </div>
             <div className='pass-change'>
                <div>
                    <span className='company-name'>Kullanıcı Yönetimi</span>
                </div>
                <div className='fa2'>
                    <span>Kuruluşunuzdaki kullanıcıları davet edin</span>
                    <Button className="fund-button" label="Şifre Değiştir" />
                </div>
             </div>
             <h5>Kullanıcı Kayıtları</h5>
             <div className='pass-change'>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Adı</th>
      <th scope="col">Soyadı</th>
      <th scope="col">Rolü</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>envisionfintech@gmail.com	</td>
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