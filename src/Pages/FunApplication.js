import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import FunApplicationTabs from "../Components/FundApplicationTabs";
export default function FundApplication() {
    const { user } = useAuthContext();

    
      return (
         user && (
            <>
                
                <FunApplicationTabs/>
                
            </>
            
                  
   
         )
      );

  }