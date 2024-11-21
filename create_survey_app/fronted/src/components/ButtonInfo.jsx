import { DropUp } from "../assets/icons"

const ButtonInfo = ({info}) => {
  return (

    <div className=" relative flex z-10   rounded  bg-white shadow-[0_-1px_5px_rgba(0,0,0,0.2)]">
         
    <p className={` text-sm   px-2 py-1  flex justify-end items-end  whitespace-nowrap `}>
             {info}
      </p>

    <span className="absolute -top-[10px] right-2  text-white">
          <DropUp/>
      </span>
  </div>
  )
}

export default ButtonInfo