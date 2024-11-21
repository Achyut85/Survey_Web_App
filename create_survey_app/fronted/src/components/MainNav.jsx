import { dashbordMenuItem, projectMenuItem } from "../utility/menu"
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from "../features/navigation/navigationSlice"

const MainNav = () => {
  const navigation = useSelector((state) => state.navigation)
  const dispatch = useDispatch()
 

  return (
   
    <div className={` bg-white   flex items-center justify-between ${navigation.currentPage === "project" ? " h-[100%] rounded-none w-[85px] flex-col flex-shrink-0" : "h-[10%] rounded-tl-[15px]"} `}>
      {
        navigation.currentPage === "home" &&
        <ul className="flex items-center  justify-between h-full mx-6 ">
          {
            dashbordMenuItem.map((item) => (
              <li className={`${navigation.active === item.id ? "border-blue-700 text-blue-700" : "border-transparent"} border-b-2 px-5 pt-4 h-full flex items-center justify-center cursor-pointer transition-colors select-none`} key={item.id} onClick={() => {
                dispatch(setActive(item.id))
              }}><span>{item.title}</span></li>
            ))

          }
        </ul>
        }

{
        navigation.currentPage === "project" &&
        <ul className="flex  w-full h-full my-6  flex-col   items-center  gap-8">
          {
            projectMenuItem.map((item) => (
              <li className={`${navigation.active === item.id ? "border-blue-700 text-blue-700" : "border-transparent"} border-l-2  w-full  flex items-center justify-center text-[0.75rem] flex-col  cursor-pointer select-none`} key={item.id} onClick={() => {
                dispatch(setActive(item.id))
                
              }}>
                <span className="text-3xl">{item.icon && <item.icon />}</span>
                <span>{item.title}</span></li>
            ))

          }
        </ul>
        }
      
    </div>
   
   
  )
}

export default MainNav