import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'
import Button from './button';
import { useTranslation } from 'react-i18next';

export default function PreliminaryFundingAmountTab() {
  const { t, i18n } = useTranslation();
    return (
        <div className='account-card'>
            <h3>{t('title2')}</h3>
            <h2> 15,000 TL</h2>
            <p>{t('fund-info2')}</p>
            <div className='account-form'>
                <form>
                    <div className='amount'>
                        <div>
                        <label>{t('title3')}</label>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"29%"}}>
                                <select className='form-control form-select' type="text" name="earning-type">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>TL</option>
                                </select>
                            </div>
                            <div style={{width:"69%"}}>
                                <input className='form-control' type="text" name="amount" />
                            </div>
                        </div>
                        </div>
                        <Button className="fund-button" label={t('btn-con')}/>
                        
                    </div>
                </form>
            </div>
            <div className='accardion'>
                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">{t('sss1')} </label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c1')}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">{t('sss2')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c2')}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">{t('sss3')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c3')}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-4">{t('sss4')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c4')}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-5">{t('sss5')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c5')}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-6">{t('sss6')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                        {t('c6')}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-7" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-7">{t('sss7')}</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                      {t('c7')}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
    )}