import { useContext } from "react"
import { userContext } from "../context"
import { UserTab } from "../Type"
import Image from "../assets/github-mark-white.png"


function SearchFound( {data } : {data: UserTab}){
    const user = useContext(userContext)

    return (
        <div className={`bg-CBlack rounded-xl mt-2 flex items-center gap-3 p-2 cursor-pointer`} onClick={()=> {user?.state(data.username)}}>
            <img src={data.profile} alt={data.username} onError={(event: any)=>event.target.src  = Image} className=" w-20 rounded-xl"/>
            <div>
                <p className="text-CGray font-bold">{data.username}</p>
                <p className="text-CGray text-[0.850rem]">{data.bio}</p>
            </div>
        </div>
    )
}

export default SearchFound