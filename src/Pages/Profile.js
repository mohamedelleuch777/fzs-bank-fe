import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import ProfileCardInfo from "../Components/ProfileİnfoCard";
export default function Profile() {
    const { user } = useAuthContext();

    
      return (
         user && (
            <div>
                
                <ProfileCardInfo/>
            </div>

                
            
         )
      );

  }
  