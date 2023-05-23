import { useState } from "react"
import { FaBeer } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function LeftMenuItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} >
                <div className="sidebar-title">
                <Link to={item.path || "#"}> <span>
                        { item.icon && item.icon }
                        {item.title}    
                    </span> </Link>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content sub-title">
                    { item.childrens.map((child, index) => <LeftMenuItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
        <div className= "sidebar-item">
            <div className="sidebar-title ">
                <Link to={item.path || "#"}><span className="">{ item.icon && item.icon }
                    {item.title}</span></Link>
                    
            
            </div>
        </div>
           
        )
    }
}