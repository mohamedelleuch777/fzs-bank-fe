import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './Setting.css'
import styles from './styles.module.css'
import AccountInfoTabCard from './AccountInfoTabCard';
import ProfileInfoTabCard from './ProfileInfoTabCard';
import CompanyInfoTabCard from './CompanyInfoTabCard';
import BankAccountsTabCard from './BankAccountsTabCard';
import EddaHkTabCard from './EddaHkTabCard';
import UserManagmentTabCard from './UserManagmentTabCard';
import PreliminaryFundingAmountTab from './PreliminaryFundingAmountTab';

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
            <AccountInfoTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ProfileInfoTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <CompanyInfoTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <BankAccountsTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <EddaHkTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <UserManagmentTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
           <PreliminaryFundingAmountTab />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<SettingsTab />, rootElement);
