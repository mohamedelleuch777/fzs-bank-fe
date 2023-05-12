import React from 'react';
import ReactDOM from 'react-dom';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';

export default function ChangePass() {
    return(
        <div className='account-card'>
            <h5>Şifre Değiştir</h5>
            <div className='account-form'>
                <form>
                    <div className='form-element'>
                        <div>
                            <label>Mevcut Şifre</label>
                            <input className='form-control' type="password" name="pass-old" />
                        </div>
                        <div>
                            <label>Yeni Şifre</label>
                            <input className='form-control' type="password" name="pass-new"/>
                        </div>
                        <div>
                            <label> Yeni Şifre Tekrar</label>
                            <input className='form-control' type="password" name="pass-new-2"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Button  style={{width:"49%"}} className="fund-button" label="Şifre Değiştir" />
                            <Button style={{width:"49%"}} className="fund-button cancel" label="Vazgeç" />
                        </div>
                       
                   
                    </div>
                </form>
            </div>
        </div>
    )}