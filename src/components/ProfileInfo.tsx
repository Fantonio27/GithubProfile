import {type User} from "../Type"
import imga from "../assets/github-mark-white.png"

function ProfileInfo({ data }: {data : User}){

    const img = data.profile == ""? imga :data.profile;

    return (
        <div className="flex gap-10 items-end relative bottom-10">
            <div className="bg-CDarkgray p-2 pb-0 rounded-[1.2rem]">
               <img src={img} alt={data.username} className=" w-28 object-contain bg-black rounded-[1.2rem]"/>
            </div>

            <div className="flex gap-5 mb-[0.35rem] relative">
                {
                    Object.keys(data).map((info, index)=>{
                        return index > 2 && (
                            <div className="bg-CBlack flex h-max py-3 rounded-xl font-medium" key={index}>
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