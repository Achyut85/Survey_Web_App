import Projects from "./Projects"
import Main from "./Main"
import MainNav from "./MainNav"
import { useSelector } from 'react-redux'

const Surveys = () => {
const currentPage = useSelector((state) => state.navigation.currentPage)
  return (
    <div className=" pl-4 h-full min-w-fit flex-1">
      <Projects/>

      <main className={`h-[92%] w-full bg-slate-200 rounded-l-[20px]  shadow-2xl flex ${currentPage==="home" && "flex-col "} `} >
        <MainNav/>
        <Main/>
        
      </main>
    </div>
  )
}

export default Surveys