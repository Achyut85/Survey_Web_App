import { questionTypes } from "../utility/menu"
import { useDispatch, useSelector } from "react-redux"
import { setActive } from "../features/navigation/questionNavSlice"
import { addQuestions, updateQuestion, insertAtPosition } from "../features/navigation/questionNavSlice";
import { v4 as uuidv4 } from 'uuid';


const MenuList = ({  operation, questionActive, setQuestionActive }) => {
  const questions = useSelector((state) => state.questionNav.questions);
  const dispatch = useDispatch()

  const addQuestionType = (newQuestion) => {
    setQuestionActive(newQuestion.id);
    dispatch(addQuestions(newQuestion))
  }


  const insertQuestionTypeAtPosition = (newQuestion) => {
    setQuestionActive(newQuestion.id);
    dispatch(insertAtPosition({ newQuestion, idBetween: questionActive }));
  }


  const updateQuestionType = (updatedQuestion) => {
    dispatch(updateQuestion(updatedQuestion));
  }



  const operationOnQuestion = (title, questionType) => {
    const id = uuidv4();
    const questionValue = '';
    let newQuestion = { id, title, questionType, questionValue };


    if (["SINGLE_SELECTION", "MULTI_SELECTION", "RANKING"].includes(questionType)) {
      const answerId = uuidv4();
      const answers = [{ answerId, answerValue: '' }];
      newQuestion = { ...newQuestion, answers };
    }


    switch (operation) {
      case "Add":
        addQuestionType(newQuestion)
        break;

      case "Update":
        updateQuestionType({ ...newQuestion, id: questionActive })
        break;

      case "InsertAtPosition":
        insertQuestionTypeAtPosition(newQuestion);
        break;

      default:
        console.log("something is worng with question operation")
        return null;

    }


  }



  return (
    <div className={`absolute bg-white w-full h-full flex-col top-0 shadow-lg duration-1000 border-t-[1px] z-20 `}>
      <p className={` ${questions.length === 0 && "hidden"} absolute right-2 cursor-pointer select-none `} onClick={() => dispatch(setActive(false))}>X</p>
      <ul className="p-2 flex flex-col gap-2">
        <li className="text-gray-500 px-2 py-1 cursor-default"><h3 className="text-sm">QUESTION TYPES</h3></li>
        {
          questionTypes.map((questionType) => (
            <li className=" group flex items-center gap-2 hover:text-blue-700 hover:bg-blue-100 px-2 py-1 cursor-pointer transition-colors select-none" key={questionType.id} onClick={() => {
              operationOnQuestion(questionType.title , questionType.questionType)
              dispatch(setActive(false));

            }


            }>
              {questionType.icon && <questionType.icon className=" rounded-md p-[2px] text-lg bg-black text-white group-hover:bg-blue-700 " />}
              <p className="text-sm " >{questionType.title}</p>
            </li>
          ))

        }
      </ul>




    </div>
  )
}

export default MenuList