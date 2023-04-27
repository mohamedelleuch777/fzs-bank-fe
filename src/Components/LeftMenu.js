// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import './LeftMenu.css';
import styles from './styles.module.css'
import LeftMenuItem from './LeftMenuItem';
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
    const menu = [
        {
            "title": "Banka Hesabı",
            "icon": <FaBeer/>,
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
            "title": "Finansman",
            "icon": <FaBeer/>,
            "childrens": [
                {
                    "title": "Başvuru",
                    "path": "/"
                },
                {
                    "title": "Yönet",
                    "path": "/"
                }
               
            ]
        },
        {
            "title": "Kart",
            "icon": <FaBeer/>,
            "childrens": [
                {
                    "title": "Banka Kartı",
                    "path": "/"
                },
                {
                    "title": "Sanal Kart",
                    "path": "/"
                    
                }
               
            ]
        },
        {
            "title": "FX",
            "icon": <FaBeer/>,
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
            "title": "EFT",
            "icon": <FaBeer/>,
            "childrens": [
                {
                    "title": "EFT&FAST",
                    "path": "/"
                },
                {
                    "title": "UPT",
                    "path": "/"   
                }
                
            ]
        }, {
            "title": "Fatura",
            "icon": <FaBeer/>,
            "childrens": [
                {
                    "title": "Elektrik",
                    "path": "/"
                },
                {
                    "title": "Doğalgaz",
                    "path": "/"   
                },
                {
                    "title": "Su",
                    "path": "/"   
                }
            ]
        },
        {
            "title": "Karekod",
            "icon": <FaBeer/>,
           
        },
        {
            "title": "Sanal Pos",
             "icon": <FaBeer/>,
            
        },
        {
            "title": "Tüm Hesaplarım",
            "icon": <FaBeer/>,
            
        }
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

    useEffect(() => {
        window.addEventListener("resize",handleResizeFunc)
        handleResizeFunc();
    })
    

    return  <section className={classState}>
                <div className= "sidebar-item setting">
                    <div className="sidebar-title menu-setting">
                        
                        <span href="">
                            FRONTEND LİMİTED 
                        </span>
                        
                    </div>
                </div>
                <ul className={styles.listUL}>
                { menu.map((item, index) => <LeftMenuItem key={index} item={item} />) }
                </ul>
                <div className= "sidebar-item ">
                    <div className="sidebar-title">
                        
                        <span href="">
                             <i className="bi bi-gear"></i>
                        </span>
                        <span href="">
                             TR   EN
                        </span>
                        <span href="">
                             <i className="bi bi-box-arrow-right"></i>
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