/* 	

	

const List = ({listdata}) =>{

console.log('listdata,',listdata);

	return <div className='list-wrapper'>
		{
			listdata.map(item =>
				
					<div className='list'>{item.todoinput}
					<span className='remove'>X</span>
					</div>)
				}
				
			
	</div>
}



export default List */

import { useState } from "react";

const List = ({ data, setData }) => {

	const finishtodo = (index) => {
    setData(data.map((d, _index) => {
      if (index === _index) {
				d.isComplete = !d.isComplete
			}
			return d
		}))
	}
	
	const deletedata = (index) =>{
		setData(data.filter((d, _index) => !(index === _index)))
	}

	console.log('data',data);
	return (
		<div className="list-wrapper">
			{
				data.map((item, index)=> {
					return (
						<div
						  onClick={() => finishtodo(index)}
							className={item.isComplete ? 'list-through' : 'list'}
							key={index}
						>
							{item.text}
							<span
							  onClick={(e) => {
									e.stopPropagation()
									deletedata(index)
								}}
								className='remove'
							>
								X
							</span>
						</div>
					)
				})
			}
		</div>
	)
}


export default List
