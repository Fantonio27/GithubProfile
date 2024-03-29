import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"
import {useState } from "react"
import { User, Repo } from "./Type"
import { userContext } from "./context"
import {repositories, defaultUser} from "./assets/dataset.js"

function App() {

  const [userProfile, setUserProfile] = useState<User>(defaultUser)
  const [repository, setRepository] = useState<Repo[]>(repositories)
  const [all, setAll] = useState(false)

  const FetchRepository = async(user: string) => {
    try{
      const response = await fetch(`https://api.github.com/users/${user}/repos`)
      const dataCollection = await response.json()
  
      setRepository([]);

      dataCollection.map((data: Repo)=>{
        setRepository((props)=> ([...props,{
            name: data.name,
            description: data.description,
            license: data.license,
            forks_count: data.forks_count,
            stargazers_count:  data.stargazers_count,
            updated_at: data.updated_at,
            html_url: data.html_url
        }]))
      })
    }catch(err){
      setRepository(repositories)
    }
  }

  const FetchUser = async(user : string) => {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()

    setUserProfile(({
      profile: data.avatar_url,
      username: data.login,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      location: data.location,
    }))

    FetchRepository(user)
  }

  const number = all? 4 : repository.length;

  return (
    <div className=" bg-CDarkgray pb-12">
      <userContext.Provider value={{state: FetchUser}}>
        <Header />
      </userContext.Provider>

      <div className=" w-10/12 m-auto 2xl:w-7/12 md:w-[85%]">
        <ProfileInfo data={userProfile}/>
        
        <section className="">
          <h2 className=" text-4xl text-CGray relative mt-14 bottom-2 lg:mt-0" >{userProfile.username}</h2>
          <p className=" text-lg text-CLightGray ">{userProfile.bio == ""? 'No bio': userProfile.bio}</p>

          <div className="mt-8 mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            {
              repository.length == 0? "0 Projects":
              repository.slice(0,number).map((repo,index)=> {
                return(
                  <Card data={repo} key={index}/>
                )
              }) 
            }
          </div>
          <p className=" text-center text-CGray cursor-pointer font-bold" onClick={()=>setAll(props => !props)}>View all repositories</p>
        </section>
      </div>
    </div>
  )
}

export default App
