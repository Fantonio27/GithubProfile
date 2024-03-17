import { useContext } from "react"
import { userContext } from "../context"
import SearchFound from "./SearchFound"

function SearchBar(){
    const user = useContext(userContext)

    return (
        <div className="w-3/12 m-auto">
            <div className=" rounded-xl bg-CDarkgray m-auto flex px-4 py-4 gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#4A5567" strokeWidth="2"/>
                    <path d="M20 20L17 17" stroke="#4A5567" strokeWidth="2" strokeLinecap="round"/>
                </svg>

                <input 
                    type="text" 
                    className=" bg-transparent w-[30rem] text-CGray placeholder:text-CLightGray 
                    font-VietnamPro font-bold focus:outline-none tracking-wide" 
                    placeholder="username"
                    value={user?.username}
                    onChange={user?.state}
                />
            </div>
            
            <SearchFound />
        </div>
      
    )
}

export default SearchBar