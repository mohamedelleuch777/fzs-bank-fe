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
import { useTranslation } from 'react-i18next';
import AddOwn from './AddOwn';

 export default function SettingsTab() {
  const { t, i18n } = useTranslation();
  const [changeTab, setChangeTab] = useState(false);
  const [changeTab1, setChangeTab1] = useState(false);
  const [changeTab2, setChangeTab2] = useState(false);
  useEffect(()=>{console.log(changeTab2)}, [changeTab2]);
  return (
    <div className="Tabs">
      <h1>{t('setting')}</h1>
      <Tabs>
        <TabList>
          <Tab>
            <p>{t('acnt')}</p>
          </Tab>
          <Tab>
            <p>{t('security')}</p>
          </Tab>
          <Tab>
            <p>{t('company')}</p>
          </Tab>
          <Tab>
            <p>{t('user-man')}</p>
          </Tab>
          <Tab>
            <p>{t('uploads')}</p>
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
            <CompanyInfoTabCard Change={setChangeTab1}/>: <AddOwn/>}
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
