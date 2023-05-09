import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'


 export default function FunApplicationTabs() {
  return (
    <div className="Tabs">
    <h1>Fon Başvurusu</h1>
    
    <Tabs>
    <div class="card1">
         <ul id="progressbar" class="text-center">
           <li class="active step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
           <li class="step0"></li>
         </ul>
      <TabList>
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
        <Tab>
          <p>Yüklemeler</p>
        </Tab>
      </TabList>
    </div>
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
      <TabPanel>
        <div className="panel-content">
          <h2>Any content 7</h2>
        </div>
      </TabPanel>
    </Tabs>
  </div>
);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<FunApplicationTabs />, rootElement);