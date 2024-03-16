import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"
import { useEffect, useRef, useState } from "react"
import { User } from "./Type"

function App() {
  const defaultUser = useRef({
      Profile: '',
      Followers: 27839,
      Following: 0,
      Location: 'San Francisco, Ca',
  })

  const [userProfile, setUserProfile] = useState<User>(defaultUser.current)
  
  const FetchUser = async() => {
    const response = await fetch('https://api.github.com/users/Fantonio27/repos')
    const data = await response.json()

    setUserProfile({
      Profile: data.avatar_url,
      Followers: data.followers,
      Following: data.following,
      Location: data.avatar_url,
    })
  }

  useEffect(()=>{
    fetch('https://api.github.com/users/Fantonio27').then(response=> response.json()).then(data => console.log(data))

  })

  return (
    <div className=" bg-CDarkgray h-screen">
      <Header />

      <div className=" w-7/12 m-auto">
        <ProfileInfo />
        
        <section>
          <h2 className=" text-4xl text-CGray relative bottom-2 ">GitHub</h2>
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
