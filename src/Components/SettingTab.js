import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './Setting.css'
import styles from './styles.module.css'
import AccountInfoTabCard from './AccountInfoTabCard';

 export default function SettingsTab() {
  return (
    <div className="Tabs">
      <h1>Ayarlar</h1>
      <Tabs>
        <TabList>
          <Tab>
            <p>Hesap Bilgileri</p>
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

        <TabPanel>
          <div className="panel-content">
            <h4><AccountInfoTabCard/></h4>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 6</h2>
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
ReactDOM.render(<SettingsTab />, rootElement);
