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


    useEffect(() => {
        window.addEventListener("resize",handleResizeFunc)
        handleResizeFunc();
    })

    return <header className={classState}>
        <div>
            { user && (
                <div className='virtual-pop-menu'>
                    <span>{user.data}</span>
                    {/* <button className="topbar-logout" onClick={handleClick}>Logout</button> */}
                    <Button className="virtual-pop-button" style={btnStyle} label="Rengin ALKAN" onClick={handleClick} type="primary" />
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