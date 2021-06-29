import {useState} from 'react'

const Edit = ({ setData }) =>{
  const [ inputValue , setInputValue ] = useState('')
  
  const updateData = () =>{
    // TODO tip 2
    setData((prev) => [...prev, { text: inputValue, isComplete: false }])
  }

  console.log('inputValue',inputValue);
  return (
    <div>
      <div className='list-title'>Todolist</div>
      <input
        onChange={(e)=>setInputValue(e.target.value)} 
        value={inputValue} 
        className='addtodo'
      />
      <button onClick={updateData} className='addbut'>+</button>
    </div>
  )
}


export default Edit