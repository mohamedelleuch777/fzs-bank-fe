import { useAuthContext } from "../Hooks/useAuthContext";
import ProfileCardInfo from "../Components/ProfileInfoCard";
import ProfileFundCard from "../Components/ProfileFundCard";
import BankAccountsTabCard from "../Components/BankAccountsTabCard";
export default function AllBanksAccounts() {
    const { user } = useAuthContext();

    
      return (
         user && (
            <>
                <BankAccountsTabCard/>  
            </>
            
                  
   
         )
      );

  }