import { useState } from "react";
import { FillStar, UnfillStar } from "../assets/icons"
import { fiveStars } from "../utility/menu";
const RatingStars = () => {

  const [giveStars, setGiveStar] = useState(fiveStars);

  const handleStar = (index) => {
    const updatedStars = giveStars.map((star, i) => ({
      ...star,
      active: i <= index, 
    }));
    
    setGiveStar(updatedStars); 
  };
  


  return (
    <div className=" w-full h-full justify-center flex flex-col">
        

      <div className="py-2 px-4 my-16 flex gap-2 items-center justify-between  ">
           {
            giveStars.map((star , index) => (

              <span className={`${!star.active ? 'text-gray-400' : "text-orange-400"} text-2xl  select-none cursor-pointer`}onClick={
              () => {
                handleStar(index)
              }
              } key={star.id}>{star.active ? <FillStar/> : <UnfillStar/>}</span>

            ))
           

           }
      </div>
    </div>
  )
}

export default RatingStars