import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"
import { useRef, useState } from "react"
import { User, Username } from "./Type"
import { userContext } from "./context"

function App() {
  const defaultUser = useRef({
      profile: '',
      username: 'Github',
      bio: 'How people build software.',
      followers: 27839,
      following: 0,
      location: 'San Francisco, Ca',
  })

  const [userProfile, setUserProfile] = useState<User>(defaultUser.current)

  const FetchRepository = async() => {
    const response = await fetch('https://api.github.com/users/Fantonio27')
    const data = await response.json()

    // setUserProfile({
    //   profile: data.avatar_url,
    //   username: data.login,
    //   followers: data.followers,
    //   following: data.following,
    //   location: data.avatar_url,
    //   bio: data.bio,
    // })
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
  }

  return (
    <div className=" bg-CDarkgray h-screen">
      <userContext.Provider value={{state: FetchUser}}>
        <Header />
      </userContext.Provider>
      <div className=" w-7/12 m-auto">
        <ProfileInfo data={userProfile}/>
        
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
