import { useSelector, useDispatch } from 'react-redux'
import { setActive, deleteQuestion } from "../features/navigation/questionNavSlice"
import { questionIcon } from '../utility/GetIcon'
import { Trash, DropDown } from '../assets/icons'

const QuestonsList = ({ onClick, questionActive, setQuestionActive }) => {
  const questions = useSelector((state) => state.questionNav.questions)
  const dispatch = useDispatch();

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
    <div className="h-full w-full bg-white border-[1px] flex  gap-1 px-4   flex-col overflow-y-auto  " >
      {
        questions.map((question, index) => (
          <div key={question.id} className={`flex gap-2 text-nowrap h-fit  w-full  py-2 px-4 border-gray-200 border-[1px] my-2 justify-between  ${questionActive === question.id ? "shadow-xl opacity-100" : "shadow-sm opacity-80"} transtion duration-300 ease-in-out hover:opacity-100 cursor-pointer`} onClick={() => {
            setQuestionActive(question.id);
            dispatch(setActive(true));
            onClick("Update");

          }}>
            <div className="flex  items-center justify-center gap-2 text-black">
              <span className="font-bold">Q{index + 1}</span> {questionIcon(question.questionType)}{question.title}</div>

            {/* <button onClick={(e) => {
               e.stopPropagation();
               handleDelete( index , question.id);
            }} ><Trash /></button> */}

            <span className="flex items-center justify-center"><DropDown/></span>

          </div>

        ))
      }
      <div></div>

    </div>
  )
}

export default QuestonsList