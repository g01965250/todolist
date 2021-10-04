import {useState} from 'react'

const Edit = ({ setData }) =>{
  const [ inputValue , setInputValue ] = useState("")
  
  const updateData = () =>{
    if(inputValue!==''){
    setData((prev) => [...prev, { text: inputValue, isComplete: false }])
    setInputValue("")
  }}

  const enter = (e) =>{
    let {key} = e
    if(key==="Enter"){
      updateData()
    }
  }

  console.log('inputValue',inputValue);
  return (
    <div>
      <div className='list-title'>Todolist</div>
      <input
        onChange={(e)=>setInputValue(e.target.value)} 
        value={inputValue} 
        className='addtodo'
        onKeyDown={enter}
      />
      <button onClick={updateData} className='addbut'>+</button>
    </div>
  )
}


export default Edit