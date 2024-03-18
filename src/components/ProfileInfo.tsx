import {type User} from "../Type"

function ProfileInfo({ data }: {data : User}){
    // const userInfo: User = {
    //     username: '',
    //     Bio: '',
    //     Profile: 'fsfa',
    //     Followers: 27839,
    //     Following: 0,
    //     Location: 'San Francisco, CA',
    // }
    return (
        <div className="flex gap-10 items-end relative bottom-10">
            <div className="bg-CDarkgray p-2 pb-0 rounded-[1.2rem]">
               <img src={data.profile} alt={data.username} />
            </div>

            <div className="flex gap-5 mb-[0.35rem]">
                {
                    Object.keys(data).map((info, index)=>{
                        return index > 2 && (
                            <div className="bg-CBlack flex h-max py-3 rounded-xl font-bold" key={index}>
                                <p className="px-5 py-1 border-r-[0.1rem] border-CLightGray text-CLightGray font-VietnamPro">{info}</p>
                                <p className="px-5 py-1 text-CGray font-VietnamPro">{data[info as keyof typeof data]}</p>
                            </div>
                        )
                    })
                }
               
            </div>

        </div>
    )
}

export default ProfileInfo