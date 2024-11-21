import { easyLogo } from "../assets/logo"
import { SurveyIcons } from "../assets/icons"
const Nav = () => {
  return (
    <div className=" w-[75px] h-full flex   items-center gap-4  flex-col bg-white select-none">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center  py-4 px-1">
                        <img src={easyLogo} alt="Logo"  className="rounded-full w-12 shadow-2xl"/>
              </div>
              <div className="flex flex-col items-center justify-center text-blue-500 bg-slate-100 py-3 px-1 w-full gap-1 cursor-pointer ">
                <span className="text-lg"><SurveyIcons/></span>
                <p className="text-[0.75rem] text-center ">
                     SURVEYS
                </p>
              </div>
                <div className="rounded-full h-12 w-12 bg-green-500 flex items-center justify-center mt-auto mb-4 cursor-pointer hover:bg-green-600 transition-colors">
                  <span className="text-white  font-bold  text-2xl ">A</span>
                </div>
    </div>
  )
}

export default Nav