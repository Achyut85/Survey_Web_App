import { Home, Plus } from "../assets/icons"
import Button from "./Button"
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setPage } from "../features/navigation/navigationSlice"

const Projects = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.navigation.currentPage)
  return (
    <div className="flex h-[8%] items-center justify-between  pr-4">
      <div className={`flex justify-center items-center gap-1  ${currentPage === 'home' ? "text-blue-700" : "text-gray-500"} cursor-pointer`} onClick={() => {
        dispatch(setActive(1))
        dispatch(setPage("home"))
      }} >
        <span><Home /></span>
        <p >Projects</p>
      </div>
      {
        currentPage === "home" &&
        <Button
          ButtonIcon={Plus}
          bgColor="bg-blue-600"
          label="Create project"
          textColor="text-white"
          onClick={() => {
            dispatch(setActive(10))
            dispatch(setPage("project"))
          }}
        />}
    </div>
  )
}

export default Projects