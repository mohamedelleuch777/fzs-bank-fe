import { useState } from "react"

export default function LeftMenuItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} >
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
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
                <span href={item.path || "#"} className="">
                    { item.icon && <i className={item.icon}></i> }
                    {item.title}
            </span>
            </div>
        </div>
           
        )
    }
}