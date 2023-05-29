import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'
import FunApplicationBusinessTab from './FundApplicationBussinesInfoTab';
import PreliminaryFundingAmountTab from './PreliminaryFundingAmountTab';
import AppForFunding from './AppForFund';
import { useTranslation } from 'react-i18next';

 export default function FunApplicationTabs() {
  const { t, i18n } = useTranslation();
  return (
    
    <div className="Tabs">
    <h1>{t('fund-tab')}</h1>
    
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
          <p>{t('tab1')}</p>
        </Tab>
        <Tab>
          <p>{t('tab2')}</p>
        </Tab>
        <Tab>
          <p>{t('tab3')}</p>
        </Tab>
        <Tab>
          <p>{t('teklif-ozet')}</p>
        </Tab>
        <Tab>
          <p>{t('teklif')}</p>
        </Tab>
   
        </div>
      </TabList>
      <TabPanel>
        <div className="panel-content">
            <FunApplicationBusinessTab/>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
        <PreliminaryFundingAmountTab/>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
         <AppForFunding/>
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