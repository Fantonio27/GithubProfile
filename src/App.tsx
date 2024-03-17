import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"
import { useRef, useState } from "react"
import { User, Username } from "./Type"
import { userContext } from "./context"

function App() {
  const defaultUser = useRef({
      Profile: '',
      Username: 'Github',
      Followers: 27839,
      Following: 0,
      Location: 'San Francisco, Ca',
      Bio: 'How people build software.'
  })

  const [userProfile, setUserProfile] = useState<User>(defaultUser.current)
  
  const [username, setUsername] = useState<string>("")

  const FetchRepository = async() => {
    const response = await fetch('https://api.github.com/users/Fantonio27')
    const data = await response.json()

    setUserProfile({
      Profile: data.avatar_url,
      Username: data.login,
      Followers: data.followers,
      Following: data.following,
      Location: data.avatar_url,
      Bio: data.bio,
    })
  }

  const FetchUser = async(user : string, action : number) => {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()

    if(action == 0 && !data.message){
      setUserProfile((props)=> ({
        ...props,
        Profile: data.avatar_url,
        Username: data.login,
        Bio: data.bio
      }))
    }else if (action == 0 && !data.message){
      setUserProfile((props)=> ({
        ...props,
        Followers: data.followers,
        Following: data.following,
        Location: data.location,
      }))
    }else{
      setUserProfile(defaultUser.current)
    }
  }

  const OnChangeValue = (event:any) => {
    const {value} = event.target
    setUsername(value)

    FetchUser(value ,0)
  }

  return (
    <div className=" bg-CDarkgray h-screen">
      <userContext.Provider value={{state: OnChangeValue , username: username, found: userProfile.Username != "Github", userprofile: userProfile}}>
        <Header />
      </userContext.Provider>
      <div className=" w-7/12 m-auto">
        <ProfileInfo />
        
        <section>
          <h2 className=" text-4xl text-CGray relative bottom-2" >GitHub</h2>
          <p className=" text-lg text-CLightGray ">How people build software.</p>

          <div className="mt-8 mb-10 grid grid-cols-2 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <p className=" text-center text-CGray cursor-pointer font-bold">View all repositories</p>
        </section>
      </div>
    </div>
  )
}

export default App
