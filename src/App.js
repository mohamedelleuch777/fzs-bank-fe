
import { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LeftMenu from "./Components/LeftMenu";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useAuthContext } from "./Hooks/useAuthContext";
import ClientManagement from "./Pages/Client_mgt";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";
import FundApplication from "./Pages/FunApplication";
import ChangePass from "./Components/ChangePassWord";


export default function App() {
  const [ready, setReady] = useState(false);
  const { user } = useAuthContext();
  const [classState,setClassState] = useState("pages")

  const innerPageStart = {
    position: "fixed",
    width: user ? "calc(100vw - 302px)" : "100vw",
    height: "calc(100vh - 60px)",
    left: user ? "302px" : "0",
    top: "60px",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection:"column",
    overflowY:"scroll",
    overflowX:"hidden",
    
    
  }


  useEffect(()=>{
    setReady(true)
    window.addEventListener("resize",handleResizeFunc)
     handleResizeFunc();
  },[])

  const handleResizeFunc = () => {
    if(window.innerWidth < 500){
        setClassState("pages mobile")
    }
    else setClassState("pages")
}

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        { user && <LeftMenu />}
        {ready && <div style={innerPageStart} className={classState}>
          <Routes>
            <Route path="/" exact element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/client" exact element={user ? <ClientManagement /> : <Navigate to="/login" />} />
            <Route path="/profile" exact element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/change-pass" exact element={user ? <ChangePass /> : <Navigate to="/login" />} />
            <Route path="/setting" exact element={user ? <Setting /> : <Navigate to="/login" />} />
            <Route path="/fund-app" exact element={user ? <FundApplication /> : <Navigate to="/login" />} />
            <Route path="/login" exact element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>}
        
      </BrowserRouter>
    </div>

  );
}


function NoPage() {
  return <>Nothing To Show</>
}