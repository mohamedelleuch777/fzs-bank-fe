// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import './LeftMenu.css';
import styles from './styles.module.css'
import LeftMenuItem from './LeftMenuItem';
import Icon from './icon'
import {RiExchangeBoxLine,RiHandCoinLine, RiSendPlaneLine,RiSettings2Line,RiLogoutCircleRLine} from 'react-icons/ri';
import {MdOutlineFolderOpen,MdOutlineQrCode } from 'react-icons/md';
import {BiCartDownload } from 'react-icons/bi';
import {BsCreditCard2Front, BsFiles } from 'react-icons/bs';
import {TbFileStack} from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

 


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const ClickHandle= async lang =>{
        await i18n.changeLanguage(lang) 
    }
    console.log(i18n.language)
    const menu = [
        {
            "title": t('left-fund'),
            "path": "/fund-app",
            "icon": <RiHandCoinLine/>,
            "childrens": [
                {
                    "title": "Başvuru",
                    "path": "/fund-app",
                },
                {
                    "title": "Yönet",
                    "path": "/"
                }
               
            ]
        },
        {
            "title": t('left-bank'),
            "icon": <MdOutlineFolderOpen />,
            "childrens": [
                {
                    "title": "Hesap Aç",
                    "path": "/"
                },
                {
                    "title": "Yönet",
                    "path": "/"
                }
            ]
        },
       
        {
            "title": t('sanal-kart'),
            "icon": <BsCreditCard2Front/>,
          
        },
        {
            "title": t('fx'),
            "icon": <RiExchangeBoxLine/>,
            "childrens": [
                {
                    "title": "Döviz",
                    "path": "/"
                },
                {
                    "title": "Altın",
                    "path": "/"   
                },
                {
                    "title": "Gümüş",
                    "path": "/"   
                }
            ]
        },
        {
            "title": t('eft'),
            "icon": <RiSendPlaneLine/>,
            "childrens": [
                {
                    "title":t('fast'),
                    "path": "/"
                },
                {
                    "title": t('upt'),
                    "path": "/"   
                }, 
                {
                    "title": t('kolay'),
                    "path": "/"   
                }
                
            ]
        }, {
            "title": t('fatura'),
            "icon": <TbFileStack/>,
            "childrens": [
                {
                    "title": t('dogalgaz'),
                    "path": "/"
                },
                {
                    "title": t('elektrik'),
                    "path": "/"   
                },
                {
                    "title": t('su'),
                    "path": "/"   
                },
                {
                    "title": t('tel'),
                    "path": "/"   
                },
                {
                    "title": t('net'),
                    "path": "/"   
                },
                {
                    "title": t('tv'),
                    "path": "/"   
                }
            ]
        },
        {
            "title": t('karekod'),
            "icon": <MdOutlineQrCode/>,
           
        },
        {
            "title": t('sanal-pos'),
             "icon": <BiCartDownload/>,
            
        },
        {
            "title":t('tum-hesap'),
            "icon": <BsFiles/>,
            
        },
       
    ];

    const [classState,setClassState] = useState("left-menu")
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }
    const handleResizeFunc = () => {
        if(window.innerWidth < 500){
            setClassState("left-menu mobile")
        }
        else setClassState("left-menu")
    }
    const toggleLeftMenu = () => {

        const leftMenu = document.querySelector("section.left-menu")
        let classList = leftMenu.getAttribute("class")
        if(classList.includes('show')) {
            classList = "left-menu mobile"
        }
        else {
            classList = "left-menu mobile show" 
        }
        leftMenu.setAttribute("class" , classList)
    }

    useEffect(() => {
        window.addEventListener("resize",handleResizeFunc)
        handleResizeFunc();
    })
    

    return  <section className={classState}>
                <div onClick={toggleLeftMenu}>
                  <Icon style={{fontSize: 30,
                    padding: "5px 10px",color:"white",
                    margin: "auto 5px"}} icon="list" />
                 </div>
                <div className= "sidebar-item setting">
                    <div className="sidebar-title menu-setting">
                        
                        <span >
                           <Link to="/profile"> FRONTEND LİMİTED</Link>
                        </span>
                        
                    </div>
                </div>
                <ul className={styles.listUL}>
                { menu.map((item, index) => <LeftMenuItem key={index} item={item} />) }
                </ul>
                <div className= "sidebar-item menu-bottom">
                    <div className="sidebar-title">
                        <span href="" >
                        <Link to="/setting" ><RiSettings2Line className='sets'/></Link>
                        </span>
                        <span >
                        <span onClick={() =>ClickHandle('tr')} className='lang'>TR</span> <span onClick={() =>ClickHandle('en')} className='lang'>EN</span>
                        </span>
                        <span  className="logout" href="">
                            <RiLogoutCircleRLine/>
                        </span>
                    </div>
                </div>
               
            </section>
}


export default Navbar;

const Item = (props) => {

    const [path,] = useState(props.path)

    const redirect = () => {
        window.location.href = path;
    }

    return (
        <li className={styles.item} onClick={redirect}>
            <div className={styles.iconContainer} style={{backgroundColor:props.color}}>
                {/* <i className={"fa fa-"+props.icon} aria-hidden="true"></i> */}
                <i className={props.icon}></i>
            </div>
            <h3 className={styles.itemText}>{props.label}</h3>
        </li>
    )
}