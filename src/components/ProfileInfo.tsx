import {type User} from "../Type"
import githubLogo from "../assets/github-mark-white.png"

function ProfileInfo({ data }: {data : User}){

    const img = data.profile == ""? githubLogo :data.profile;

    return (
        <div className="flex flex-col items-start relative lg:items-end lg:bottom-10 sm:flex-row sm:gap-10 ">
            <div className="bg-CDarkgray p-2 pb-0 rounded-[1.2rem] relative bottom-10 lg:bottom-0 ">
               <img src={img} alt={data.username} className="min-w-28 w-28 bg-black rounded-[1.2rem]"/>
            </div>

            <div className="flex flex-col gap-x-5 gap-y-3 relative lg:flex-row lg:top-0 lg:mb-[0.35rem] sm:top-3">
                {
                    Object.keys(data).map((info, index)=>{
                        return index > 2 && (
                            <div className="bg-CBlack flex h-max w-max py-3 rounded-xl font-medium" key={index}>
                                <p className="px-5 py-1 border-r-[0.1rem] border-CLightGray text-CLightGray">{info}</p>
                                <p className="px-5 py-1 text-CGray">{data[info as keyof typeof data]}</p>
                            </div>
                        )
                    })
                }
               
            </div>

        </div>
    )
}

export default ProfileInfo