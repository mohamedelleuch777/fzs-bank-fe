import React,{useEffect, useState} from 'react';
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
import UploadTabCard from './UploadsTabCard';
import ChangePass from './ChangePassWord'
import AddBusinessDetails from './AddBusinessDetail';

 export default function SettingsTab() {
  const [changeTab, setChangeTab] = useState(false);
  const [changeTab1, setChangeTab1] = useState(false);
  const [changeTab2, setChangeTab2] = useState(false);
  useEffect(()=>{console.log(changeTab)}, [changeTab]);
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
            {!changeTab?
            <ProfileInfoTabCard Change={setChangeTab}/>: <ChangePass/>
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          {!changeTab1?
            <CompanyInfoTabCard Change={setChangeTab1}/>: <AddBusinessDetails/>}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <UserManagmentTabCard/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <UploadTabCard/>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<SettingsTab />, rootElement);
