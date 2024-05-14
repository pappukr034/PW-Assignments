
import './App.css'
import Button from './componenents/Button'
import Header from './componenents/Header'
import Lists from './componenents/Lists'
import Person from './componenents/Person'
import Question from './componenents/Question'
function App() {
  const lists=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
    <>
       <div className=' p-5 py-2'>
       
       {/* Question 1 */}
       <Question 
        quesNo='1' 
        children={<Person name='PAPPU KUMAR' age="22 years " />}
        />


       {/* Question 2 */}
        <Question 
        quesNo='2' 
        children={<Button text='Click' onClick={()=> alert('Button click')} />}
        />


       {/* Question 3 */}
        <Question 
        quesNo='3' 
        children={<Header title='Heading of this Page' />}
        />

 
       {/* Question 4 */}
        <Question 
        quesNo='4' 
        children={<Lists lists={lists} />}
        />


       </div>
    </>
  )
}

export default App
