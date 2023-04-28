import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import ProfileCardInfo from "../Components/ProfileInfoCard";
import ProfileFundCard from "../Components/ProfileFundCard";
export default function Profile() {
    const { user } = useAuthContext();

    
      return (
         user && (
            <>
                
                <ProfileCardInfo/>
                <ProfileFundCard/>
                
            </>
            
                  
   
         )
      );

  }
  