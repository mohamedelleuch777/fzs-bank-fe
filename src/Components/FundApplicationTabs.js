import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'
import FunApplicationBusinessTab from './FundApplicationBussinesInfoTab';

 export default function FunApplicationTabs() {
  return (
    <div className="Tabs">
    <h1>Fon Başvurusu</h1>
    
    <Tabs>
   
      <TabList>
      <div class="card1">
         <ul id="progressbar" class="text-center">
           <li class="active step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
         
         </ul>
        <Tab>
          <p>İşletme Bilgileri</p>
        </Tab>
        <Tab>
          <p>Profil Bilgileri</p>
        </Tab>
        <Tab>
          <p>Şirket Bilgileri</p>
        </Tab>
        <Tab>
          <p>Banka Hesapları</p>
        </Tab>
        <Tab>
          <p>eDDA HK</p>
        </Tab>
        <Tab>
          <p>Kullanıcı Yönetimi</p>
        </Tab>
        </div>
      </TabList>
      <TabPanel>
        <div className="panel-content">
            
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
         
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
         
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
         
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
        </div>
      </TabPanel>
    </Tabs>
  </div>
);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<FunApplicationTabs />, rootElement);