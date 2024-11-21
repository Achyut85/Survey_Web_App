
import { questionTypes } from "./menu"
export  const questionIcon = (questionType) =>{
    const question = questionTypes.find((q) => q.questionType === questionType)
    return <question.icon className=" rounded-md p-[3px] text-lg bg-black text-white  " />
}