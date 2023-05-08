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

 export default function FunApplicationTabs() {
  return (
    <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-11 col-lg-10 col-xl-9">
      <div class="card card0 border-0">
        <div class="row">
          <div class="col-12">
            <div class="card card00 m-2 border-0">
              <div class="row text-center justify-content-center px-3">
                <p class="prev text-danger" id="back"><span class="fa fa-long-arrow-left"> Go Back</span></p >
                <h3 class="mt-4">Simple Registration</h3>
              </div>
              <div class="d-flex flex-md-row px-3 mt-4 flex-column-reverse">
                <div class="col-md-6">
                  <div class="card1">
                    <ul id="progressbar" class="text-center">
                      <li class="active step0"></li>
                      <li class="step0"></li>
                      <li class="step0"></li>
                      <li class="step0"></li>
                    </ul>
                    <h6 class="mb-5">Enter your Email</h6>
                    <h6 class="mb-5">Set password</h6>
                    <h6 class="mb-5">Select your country</h6>
                  </div>
                </div>
                <div class="col-md-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)}
