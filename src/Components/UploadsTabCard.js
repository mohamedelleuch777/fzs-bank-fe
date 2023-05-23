import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import{FaCertificate}from 'react-icons/fa';
import  './Setting.css'
import styles from './styles.module.css'
import Button from './button';
import AddFile from './modals/AddFile'

export default function UploadTabCard() {
  const [modalOpened, setModalOpened] = useState(false);
    return(
        <div className='account-card'>
         <h5>Yüklediğiniz Belgeler</h5>
          <div className='upload'>
           
              <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                <Button  style={{width:"200px"}} className="fund-button add" label="Ekle" onClick={() => setModalOpened(true)}/>
                {modalOpened && <AddFile  setOpenModal={setModalOpened}/>}
                <Button style={{width:"200px"}} className="fund-button cancel" label="İndir" />
              </div>
          <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox"  className='file-check'/></th>
                    <th scope="col">TARİH</th>
                    <th scope="col">İSİM</th>
                    <th scope="col">DOSYA TÜRÜ</th>
                    <th scope="col">BOYUT</th>
                    <th scope="col">AKSİYON</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </table>
        </div>
        </div>
    )}