import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function AddServices() {
    var formdata = new FormData();
    formdata.append("tenantCode", "6299079474");
    formdata.append("screenOption", "0");
    formdata.append("email", "api_test@polynomtech.com");
    formdata.append("password", "Api1234");
    
    var requestOptions = {
      method: 'POST',
      mode:'no-cors',
      body: formdata,
      headers:{
        'X-IBM-Client-Id': 'clientId',
        'X-IBM-Client-Secret': 'clientSecret',
        'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'application/json',
    }
    };
    
    fetch("https://openapi.aktifbank.com.tr/api/dev/Auth/DealerLogin", requestOptions)
      .then(response => response.text())
      .then(response => console.log(response, "grldi"))
      .then(result => console.log(result, "deneme"))
      .catch(error => console.log('error', error));

     
    
 
    return(
        <></>
    )}
