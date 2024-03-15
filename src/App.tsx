import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"

function App() {
  return (
    <div className=" bg-CDarkgray h-screen">
      <Header />
      <ProfileInfo />
      
      <div>
        <h2 className=" text-4xl text-CGray">Github</h2>
        <p className=" text-lg text-CGray ">How people build software.</p>

        <div className=" columns-2">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
