import { useContext } from "react"
import { userContext } from "../context"
import Image from "../assets/github-mark-white.png"

function SearchFound(){
    const user = useContext(userContext)

    const display = user?.found? "h-max" :"h-0 py-0" 

    return (
        <div className={`bg-CBlack rounded-xl mt-2 flex items-center gap-3 p-2 cursor-pointer overflow-hidden duration-500 ${display}`}>
            <img src={user?.userprofile.Profile} alt={user?.username} onError={(event: any)=>event.target.src  = Image} className=" w-20 rounded-xl"/>
            <div>
                <p className="text-CGray font-bold">{user?.userprofile.Username}</p>
                <p className="text-CGray text-[0.850rem]">{user?.userprofile.Bio}</p>
            </div>
        </div>
    )
}

export default SearchFound