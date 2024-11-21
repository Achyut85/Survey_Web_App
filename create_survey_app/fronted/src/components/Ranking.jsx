import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Ranking = ({ question }) => {
  const { answers = [] } = question;
  const [ranks, setRanks] = useState([]);
  const [options, setOptions] = useState([])

  useEffect(() => {

    const updatedAnswers = answers.map((answer) => (
      {
        rankId: uuidv4(),
        active: false,
        answerId: null
      }
    ));
    setRanks(updatedAnswers)
  }, [answers.length])


  useEffect(() => {

    const updatedAnswers = answers.map((answer) => (
      {
        ...answer, rankActive: false, rankBtnId: null
      }
    ));
    setOptions(updatedAnswers)
  }, [answers])


  const handleRankClick = (rankId, answerId) => {

    setOptions(options.map((option) => {

      if (option.answerId === answerId)
        return { ...option, rankActive: true, rankBtnId: rankId }

      if (option.rankBtnId === rankId)
        return { ...option, rankActive: false, rankBtnId: null }

      return option

    }))
    setRanks(ranks.map((rank) => {
      if (rank.rankId === rankId)
        return { ...rank, active: true, answerId: answerId }
      if (rank.answerId === answerId)
        return { ...rank, active: false, answerId: null }

      return rank
    }))


  }


  return (
    <div className="w-full   ">

      <div className="flex  flex-col gap-4 w-full  ">
        {
          options.map((answer) => (
            answer.answerValue &&
            <div className="flex flex-col justify-center items gap-4  my-4  " key={answer.answerId}>
              <p className="select-none mt-5"> {answer.answerValue}</p>
              <div className="flex  justify-between text-lg w-full relative">
                <p className="absolute top-full  text-gray-400 text-[0.80rem] my-2 border-b w-full">HIGH</p>
                {
                  ranks.map((rank, rankIndex) => (

                    <button className={` ${rank.active && answer.rankBtnId === rank.rankId && rank.answerId === answer.answerId ? "bg-blue-700 text-white" : rank.active || answer.rankActive ? "bg-gray-300" : "bg-white"} py-1 px-3  border`} type="button"
                      key={rank.rankId}
                      onClick={() => handleRankClick(rank.rankId, answer.answerId)}
                    >{rankIndex + 1}
                    </button>
                  ))

                }
                <p className="absolute top-full right-0 text-gray-400 text-[0.80rem] my-2">LOW</p>
              </div>
            </div>

          ))

        }
      </div>
    </div>
  )

}

export default Ranking


