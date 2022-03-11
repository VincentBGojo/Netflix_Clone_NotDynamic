
import Featured from "../components/featured/Featured"
import List from "../components/list/List"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
// all imports

//exported const to call the component elsewhere
 const Home = () => {
  return (
         <div className='home'>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
          </div>

  )
}

export default Home