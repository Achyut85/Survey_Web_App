
const SingleAndMultiSelection = ({question}) => {

  const {answers} = question;
  return (
    <div className="w-full   flex flex-col gap-2 ">
    
    <div className="flex  flex-col gap-4 w-full  my-3 ">
      {
      answers && answers.map((answer) => (
      answer.answerValue && 
       <label htmlFor="answer" className="flex  items-center  py-3 px-5 bg-white gap-3" key={answer.answerId}>
       <input type={`${question.questionType === "SINGLE_SELECTION"? "radio" : "checkbox" }`} value={answer.answerValue} name="option"  />
        {answer.answerValue}
        </label>
    ))
      }
    </div>
    </div>
  )
}

export default SingleAndMultiSelection