import Header from "./components/Header"
import ProfileInfo from "./components/ProfileInfo"
import Card from "./components/Card"

function App() {
  return (
    <>
      <Header />
      <ProfileInfo />
      
      <>
        <h2 className="">Github</h2>
        <p className="">How people build software</p>

        <div className="">
          <Card />
        </div>

      </>
    </>
  )
}

export default App
