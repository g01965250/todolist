import {useState} from 'react'
import Edit from './components/Edit'
import List from './components/List'
import './style.css'

const Todolist = () =>{
  const [data , setData ] = useState([])

  return (
    <div className='wrapper'>
      <Edit setData={setData}/>
      { // TODO tip 1
        data.length > 0 &&
        <List
          data={data}
          setData={setData}
        />
      }
    </div>
  )
}

export default Todolist
