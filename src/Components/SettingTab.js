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
  const [changeTab, setChangeTab] = useState("0");
  const changeHandler = (switchText)=>{ setChangeTab(switchText) }
  useEffect(()=>{console.log(changeTab)}, [changeTab]);
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
            {changeTab=="3"?
            <ChangePass Change={changeHandler}/>:<ProfileInfoTabCard/>}
          
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          {changeTab=="0" &&
            <CompanyInfoTabCard Change={changeHandler}/>}
          {changeTab=="1"&&
            <AddBusinessDetails Change={changeHandler}/>}
            {changeTab=="2"&&
            <AddOwn Change={changeHandler}/>}
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
