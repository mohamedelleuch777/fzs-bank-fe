import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import Button from './button';
import './Navbar.css'
import { useState,useEffect } from 'react';
import Icon from './icon';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [classState,setClassState] = useState("top-bar")

    const handleClick = () => {
        logout();
    }
    const handleResizeFunc = () => {
        if(window.innerWidth < 500){
            setClassState("top-bar mobile")
        }
        else setClassState("top-bar")
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

    return <header className={classState}>
        <div onClick={toggleLeftMenu}>
            <Icon icon="list" />
        </div>
        <div>
            { user && (
                <div>
                    <span>{user.data}</span>
                    {/* <button className="topbar-logout" onClick={handleClick}>Logout</button> */}
                    <Button style={btnStyle} label="Logout" icon="box-arrow-right" onClick={handleClick} type="primary" />
                </div>
            )}
            { !user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )}
        </div>
    </header>
}


export default Navbar;

const btnStyle = {
    margin: "auto",
    height: "auto",
    width: 340,
}