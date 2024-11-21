import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { Preview } from '../assets/icons';
import MenuList from './MenuList';
import Questionnaire from './Questionnaire';
import QuestonsList from './QuestonsList';
import { useState } from 'react';



const Main = () => {
  const navigation = useSelector((state) => state.navigation);
  const active = useSelector((state) => state.questionNav.active);
  const questions = useSelector((state) => state.questionNav.questions);
  
  const [quesOperation, setQuesOperation] = useState("Add"); 
  const [questionActive , setQuestionActive] = useState(null)
  


  return (
    <section className="h-full w-full">
      
      {navigation.currentPage === "project" && (
        <header className="h-[8%] w-full bg-white flex items-center justify-end border-l-[1px]">
          <div className='flex items-center justify-center mx-6 gap-2 '>
            <Button
              label="Preview Survey"
              bgColor="bg-gray-200"
              textColor="text-gray-400"
              ButtonIcon={Preview}
              
            />
            <Button
              label="Launch Survey"
              bgColor="bg-gray-200"
              textColor="text-gray-400"
              
            />
          </div>
        </header>
      )}

      <div className={`${navigation.currentPage === "project" ? "h-[92%]" : "h-full"} rounded-bl-[15px] relative w-full flex `} >
    
        {navigation.currentPage === "project" && (
          <div className="h-full w-full flex">
            {navigation.active === 10 && (
              <div className="h-full w-full flex" >
                <div className={`h-full absolute top-0 ${active || questions.length === 0 ? "opacity-100 block" : "opacity-0 hidden"} w-72 ${quesOperation === "Update" || questions.length === 0 ? "left-4" : "right-4"} transition-opacity`}>
               
                  <MenuList 
                    
                      questionActive = {questionActive}
                      setQuestionActive ={ setQuestionActive}
                      operation={quesOperation}
                  />
                </div>
                {questions.length > 0 && (
                  <div className='min-w-80 h-full '>
                    <QuestonsList 
                      onClick={setQuesOperation} 
                      questionActive = {questionActive}
                      setQuestionActive ={ setQuestionActive}
                    
                    />
                  </div>
                )}
                <Questionnaire 
                onClick={setQuesOperation} 
                questionActive = {questionActive}
                setQuestionActive ={ setQuestionActive}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;
