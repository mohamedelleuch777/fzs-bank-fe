import React from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'

export default function EddaHkTabCard() {
    return(
        <div className='eddahk'>
            <h4>Elektronik Otomatik Ödeme Yetkilendirmesi{"(HK)"}</h4>
            <h6>Elektronik Doğrudan Borçlandırma Yetkilendirmesi (edDA) tercihlerinizi kolayca oluşturun, bankalarınızı bağlayın ve yinelenen ödemelerinizi tüm yönleriyle yalnızca birkaç tıklamayla yönetin.</h6>
            <div className='company-info'>
                <div>
                    <span className='company-name'>Bugün kolayca kurulum yapın</span><br/>
                </div>
                <div className='add-detail'>
                    <span>Hem Hong Kong yerel kişisel hem de ticari banka hesapları için geçerlidir. 7/24 anında ve güvenli ödemelerin keyfini çıkarın.</span>
                    <br/>
                    <span>Bugün başlamak için Yatırım Yöneticinizle iletişime geçin.</span>
                </div>
             </div>
        </div>
    )}