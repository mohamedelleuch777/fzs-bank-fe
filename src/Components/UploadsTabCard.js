import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';

export default function UploadTabCard() {
    return(
        <div className='account-card'>
        <h5>Yüklediğiniz Belgeler</h5>
        <div className='upload'>
        <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox"  className='file-check'/></th>
                    <th scope="col">TARİH</th>
                    <th scope="col">İSİM</th>
                    <th scope="col">DOSYA TÜRÜ</th>
                    <th scope="col">BOYUT</th>
                    <th scope="col">AKSİYON</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
        </div>
        </div>
    )}