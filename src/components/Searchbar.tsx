import { useState } from "react"
import SearchFound from "./SearchFound"
import { UserTab } from "../Type"
import {defaultSearch} from "../assets/dataset"

function SearchBar(){

    const [searchField, setSearchField] = useState("")

    const [dataform, setDataform] = useState<UserTab>(defaultSearch)

    const FetchSingleUser = async(value:string) => {
        try{
            const response = await fetch(`https://api.github.com/users/${value}`)
            const data = await response.json()

            setDataform({
                profile: data.avatar_url,
                username: data.login,
                bio: data.bio, 
              })

        }catch(err){
            setDataform(defaultSearch)
        }
    }
    
    const onchange = (event : any) => {
        const {value} = event.target;

        setSearchField(value)
        FetchSingleUser(value)
    }

    const clear = () => {
       setSearchField("")
       setDataform(defaultSearch)
    }

    return (
        <div className=" w-10/12 m-auto sm:w-[30rem] ">
            <div className=" rounded-xl bg-CDarkgray m-auto flex px-4 py-4 gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#4A5567" strokeWidth="2"/>
                    <path d="M20 20L17 17" stroke="#4A5567" strokeWidth="2" strokeLinecap="round"/>
                </svg>

                <input 
                    type="text" 
                    className=" bg-transparent w-[30rem] text-CGray placeholder:text-CLightGray 
                    font-medium focus:outline-none" 
                    placeholder="username"
                    value={searchField}
                    onChange={onchange}
                />
            </div>
            
            {
                (dataform.username != 'Github' && searchField != "") &&
                <SearchFound data={dataform} reset={clear}/>
            }
        </div>
      
    )
}

export default SearchBar