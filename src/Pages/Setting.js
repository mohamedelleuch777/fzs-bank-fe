import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import SettingsTab from "../Components/SettingTab";

export default function Setting() {
    const { user } = useAuthContext();

    
      return (
         user && (
            <>
                
                <SettingsTab/>
            </>
            
                  
   
         )
      );

  }