import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Check } from "../assets/icons";
import SingleAndMultiSelection from "./SingleAndMultiSelection";
import Ranking from "./Ranking";
import RatingStars from "./RatingStars";
import OpendEnded from "./OpendEnded";
import NumericOpenEnded from "./NumericOpenEnded";
import Description from "./Description";

const PreviewQuestion = ( {questionId}) => {
  const questions = useSelector((state) => state.questionNav.questions)
    const [questionAndNumber, setQuestionAndNumber] = useState({question:null , questionNum:1})

    const [isCheck , setIsCheck] = useState(false)
    useEffect(() => {
      const index = questions.findIndex((q) => q.id === questionId);
      
      if (index !== -1) {
        const selectedQuestion = questions[index];
        setQuestionAndNumber({ question: selectedQuestion, questionNum: index + 1 });
      }
  
      setIsCheck(false);
    }, [questionId, questions]);


 
  
  
  const questionType = () =>{
    const {question, questionNum} = questionAndNumber;
    if (!question) return null;

    const {questionType} = question;
    switch(questionType){
      case "SINGLE_SELECTION" : 
      case "MULTI_SELECTION":
         return <SingleAndMultiSelection 
          question = {question}/>
        
      case "OPEN_ENDED":
         return <OpendEnded/>

      case "NUMERIC_OPEN_ENDED":
         return <NumericOpenEnded />


      case "RANKING":
         return <Ranking
          question = {question}/>

      case "STAR":
        return <RatingStars/>

       case "DESCRIPTION":
          return <Description/>

        default:
            return <p>Invalid Question Type</p>; 
                
        }
        
      }

  
   const {question} = questionAndNumber
  return (
    <form className="h-full w-full bg-white border" >
          {
            question && !isCheck &&
          
            
         <div className="flex flex-col py-6 px-8  h-full bg-gray-100  overflow-y-auto gap-8 justify-start items-center ">

            <p className="text-[1rem] font-bold   w-full text-center"> Q{ questionAndNumber.questionNum}. <span className="text-[1rem] font-semibold text-center ">{question.questionValue}</span>
            </p>
          
              
               {questionType()}
              
               
            
            
              <div className=" mt-auto flex items-center justify-center w-full  ">
              <button className="bg-green-600 py-4 px-16 rounded-3xl text-xl  " onClick={() => setIsCheck(!isCheck)}
              type="button"
                ><Check/></button>
              </div>
              
         </div>

          }
        {
           isCheck &&
          <div className="w-full h-full flex items-center justify-center flex-col font-bold text-3xl">
            <p>Thank You </p>
          </div>
        }
          
    </form>
  )
}

export default PreviewQuestion