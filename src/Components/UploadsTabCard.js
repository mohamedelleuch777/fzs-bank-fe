import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import AddFile from './modals/AddFile'
import { useTranslation } from 'react-i18next';

export default function UploadTabCard() {
  const { t, i18n } = useTranslation();
  const [modalOpened, setModalOpened] = useState(false);
    return(
        <div className='account-card'>
         <h5>{t('files')}</h5>
         <span>{t('file-info')}</span>
          <div className='upload'>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                <Button  style={{width:"200px"}} className="fund-button add" label={t('add-btn')}onClick={() => setModalOpened(true)}/>
                {modalOpened && <AddFile  setOpenModal={setModalOpened}/>}
                <Button style={{width:"200px"}} className="fund-button cancel" label={t('download-btn')} />
              </div>
          <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox"  className='file-check'/></th>
                    <th scope="col">{t('upload-date')}</th>
                    <th scope="col">{t('file-name')}</th>
                    <th scope="col">{t('file-type')}</th>
                    <th scope="col">{t('file-size')}</th>  
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </table>
        </div>
        </div>
    )}