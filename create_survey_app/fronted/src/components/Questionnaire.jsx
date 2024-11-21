import { QuestionPreview } from "../assets/icons"
import { useSelector, useDispatch } from 'react-redux'
import { setActive , addAnswer ,deleteAnswer , onChangeQuestion , onchageAnswer , deleteQuestion } from "../features/navigation/questionNavSlice"
import Button from "./Button"
import { Plus , Save , ThreeDots , ImageUpload } from "../assets/icons"
import { v4 as uuidv4 } from 'uuid';
import { questionIcon } from "../utility/GetIcon"
import {  useState } from "react"
import PreviewQuestion from "./PreviewQuestion"
import ButtonInfo from "./ButtonInfo"
import OverFlowMenu from "./OverFlowMenu"
import { questionMenuList } from "../utility/menu"
import UploadImage from "./UploadImage"

const Questionnaire = ({onClick , questionActive ,   setQuestionActive}) => {
  const questions = useSelector((state) => state.questionNav.questions)
  const dispatch = useDispatch();
  
  


  const [isPreview , setIsPreview] = useState(false);
  const [hoveredButtonId, setHoveredButtonId] = useState(null);
  const [threeDot , setThreeDot] = useState({active: false, id:null});
  const [showModal , setShowModel] = useState(false);
  

    const onChangeQuestionInput = (e , index ) =>{
                  const questionValue = e.target.value;
                  dispatch(onChangeQuestion({index, questionValue}))

    }


    const onChangeAnswerInput = (e , questionIndex , answerIndex ) =>{
      const answerValue = e.target.value;
      dispatch(onchageAnswer({questionIndex, answerIndex , answerValue}))

}



const handleDelete = ( index , id) => {
  if (questions.length === 1) {
    onClick("Add");
  }
  else if (questions.length - 1 === index) {
    setQuestionActive(questions[index - 1].id)
  }
  else {
    setQuestionActive(questions[index + 1].id)
  }
  dispatch(deleteQuestion(id))

}




  
  
  return (
    <div className="w-full h-full overflow-hidden  py-2 pr-2 relative">
        
     
      {

        questions.length > 0 &&
           <div className={`h-full w-[50%] absolute z-20 ${isPreview ? "translate-x-[100%]":"translate-x-[200%]"} transition ease-in-out duration-300 top-0 border-t-[1px]`} >
            <span className="absolute right-4  cursor-pointer text-xl select-none" onClick={() => setIsPreview(false)}>X</span>
            <PreviewQuestion
               questionId = {questionActive}
               
            />
         </div>
      }
       
       <ul className="flex items-center px-2 py-1 justify-end gap-2 ">
        <li className={` relative  flex items-center justify-end bg-gray-50 p-2 rounded-md  flex-col ${questions.length !==0 ? "cursor-pointer" :  "cursor-not-allowed"}`}onClick={() => questions.length !==0 ? setIsPreview(true) :  setIsPreview(false) } 
        onMouseEnter={() => setHoveredButtonId("preview")} 
        onMouseLeave={() => setHoveredButtonId(null)}>
        <QuestionPreview/>
        {
          hoveredButtonId === "preview" &&
        <span className="absolute top-10 right-0">
        <ButtonInfo
            info="Preview question"
          />
        </span>}
           
        </li>
       </ul>

      {
        questions.length > 0 &&
          <div className="w-full py-2 pr-2   h-full  flex-col  overflow-y-auto" >
          
           
          <form className="  w-full  rounded-md flex  flex-col gap-3  ">
          { showModal && <UploadImage 
        closeModal = {() => {
          setShowModel(false);
        }}
    />}
            {
            questions.map((question ,index) =>(
            <div className={`flex flex-col gap-4  ${question.id === questionActive ? "bg-white shadow-2xl  border-white  border-transparent " : "bg-white opacity-80 translate-x-[10px]"} rounded-sm  p-4 shadow-md items-start  transition ease-in-out duration-300 hover:bg-white  hover:opacity-100 border-r-[10px]  relative group `  } key={question.id} onClick={() => {
              setQuestionActive(question.id)
              }}>
              {/* this atPosition */}
                {
                  (questions.length-1) !== index &&
                 <span className={`absolute right-4  p-1  text-[1rem] font-bold bg-black -bottom-2 text-white rounded ${question.id !== questionActive && "hidden group-hover:block" } cursor-pointer hover:bg-blue-700 transition`} 
                 onClick={() => {dispatch(setActive(true))
                  onClick("InsertAtPosition")
                }
              } ><Plus/></span>
                }

              <div className="flex w-full justify-center items-start gap-2 mb-2 ">
                
                <span className="flex justify-center items-center  font-bold p-2  ">{questionIcon(question.questionType) } </span>
                <div className="flex flex-col w-full gap-4 " >
                  <div className="w-full flex items-center justify-center gap-2 ">
                  <span className="flex justify-center items-center font-bold ">Q{index+1}</span>
                  <input 
                  type="text" 
                  placeholder="Write Question"  
                  className="input w-full "
                  value={question.questionValue}
                  onChange={(e) => {
                    onChangeQuestionInput(e , index);
                  }}
                  />
                  <div className="cursor-pointer  flex  justify-end  rounded-md  relative flex-col">
                    <div className={`absolute -right-2 top-0 z-10 ${threeDot.active && question.id===questionActive ?" block" : "hidden "} transition `} >
                    <OverFlowMenu
                      items = {questionMenuList}
                      onClick = {
                        (id) => {
                          if(id === 2 )
                          handleDelete( index , question.id);
                          setThreeDot({active:false , id:null});
                        }
                      }

              
                    />
                    </div>
                    
                    
                    <span className="hover:text-blue-600 transition"
                        onMouseEnter={() => setHoveredButtonId(question.id)} 
                        onMouseLeave={() => setHoveredButtonId(null)}
                        onClick={() => setShowModel(true)}
                    >
                    <ImageUpload/>
                    </span>
                  
                    {
                      hoveredButtonId === question.id &&
                    <span className="absolute -right-2 top-8 ">
                    <ButtonInfo
                     info="Add media"
                    />
                    </span>}
                  </div>
                  <span className="cursor-pointer "  onClick={() => {
                    setThreeDot((prev) => ({...prev, active: !threeDot.active}));
                  }}><ThreeDots/></span>
                 
                  </div>
           
                { (question.questionType === "MULTI_SELECTION" || question.    questionType === "SINGLE_SELECTION" || question.questionType === "RANKING" ) &&
                  question.answers.map((answer , idx) =>(
                    
                    <div className="w-full flex items-center justify-center gap-2 " key={answer.answerId}>
                      <span className="text-gray-400">{((idx+1)/10) < 1 ? "0" + (idx+1) : (idx+1)}</span>
                     <input 
                     type="text"  
                     placeholder="Type answer...."
                     className="input  w-full" 
                     value={answer.answerValue}
                     onChange={(e) =>{
                       onChangeAnswerInput(e,index,idx)
                      }}
                     /> 
                    <div className="cursor-pointer  flex  justify-end  rounded-md  relative flex-col">
                    
                    <span className="hover:text-blue-600 transition"
                        onMouseEnter={() => setHoveredButtonId(answer.answerId)} 
                        onMouseLeave={() => setHoveredButtonId(null)}
                        onClick={() => setShowModel(true)}
                    >
                    <ImageUpload/>
                    </span>
                    {
                      hoveredButtonId === answer.answerId &&
                    <span className="absolute -right-2 top-8 ">
                    <ButtonInfo
                     info="Add media"
                    />
                    </span>}
                  </div> 

                     <span className="text-sm text-gray-600 p-1 cursor-pointer select-none hover:text-black font-bold " onClick={() => {dispatch(deleteAnswer({index: index , answerId:answer.answerId}))
                     setQuestionActive(question.id)
                     
                    }
                  }>X</span>
                   </div>
                  ))    
                }
               
                </div>
              
              </div>

              { (question.questionType === "MULTI_SELECTION" || question.    questionType === "SINGLE_SELECTION" || question.questionType === "RANKING" ) &&
              <Button
              ButtonIcon={Plus}
              label="Add answer"
              bgColor="bg-gray-600"
              textColor="text-white"
              hover="hover:bg-black"
              onClick={() =>{
                const  answerId = uuidv4();
                dispatch(addAnswer({index: index , answerId:answerId , answerValue:''}))
              }}
              />
            }
           
            </div>
            )) } 
            <div className="flex gap-3 justify-end items-center py-4 px-8 mb-28">
           

             <Button
              onClick={() => {dispatch(setActive(true))
                onClick("Add")
              }
            }
              ButtonIcon={Plus}
              bgColor="bg-gray-600"
              label=" Add question"
              textColor="text-white"
              hover="hover:bg-black"
             
             />

              <Button
                  ButtonIcon={Save}
                  label="Save all"
                  bgColor="bg-blue-400"
                  textColor="text-white"
                  hover="hover:bg-blue-700"
                  submit
              />
            </div>
          
          </form> 
         
     </div>
}
  
    </div>
  )
}

export default Questionnaire