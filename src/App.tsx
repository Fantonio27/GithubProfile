import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"
import { useEffect, useState } from "react"
import { User, Repo } from "./Type"
import { userContext } from "./context"
import data from "./assets/dataset.js"

function App() {
  const defaultUser = {
      profile: "",
      username: 'Github',
      bio: 'How people build software.',
      followers: 27839,
      following: 0,
      location: 'San Francisco, Ca',
  }

  const [userProfile, setUserProfile] = useState<User>(defaultUser)
  const [repository, setRepository] = useState<Repo[]>(data)
  const [no, setNo] = useState(false)

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
      setRepository(data)
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

  const number = no? 4 : repository.length
  return (
    <div className=" bg-CDarkgray pb-12">
      <userContext.Provider value={{state: FetchUser}}>
        <Header />
      </userContext.Provider>

      <div className=" w-7/12 m-auto">
        <ProfileInfo data={userProfile}/>
        
        <section className="md:mt-14 sm:mt-14">
          <h2 className=" text-4xl text-CGray relative bottom-2" >{userProfile.username}</h2>
          <p className=" text-lg text-CLightGray ">{userProfile.bio == ""? 'No bio': userProfile.bio}</p>

          <div className="mt-8 mb-10 grid grid-cols-2 gap-8">
            {
              repository.length == 0? "0 Projects":
              repository.slice(0,number).map((repo,index)=> {
                return(
                  <Card data={repo} key={index}/>
                )
              }) 
            }
          </div>
          <p className=" text-center text-CGray cursor-pointer font-bold" onClick={()=>setNo(props => !props)}>View all repositories</p>
        </section>
      </div>
    </div>
  )
}

export default App
