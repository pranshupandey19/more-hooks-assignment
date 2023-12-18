import React from 'react'

const TodoItem = ({item:{data,isHidden},index,dispatch}) => {
  return (
    <div style={{
      backgroundColor:"darkblue",
      width:"90vw",
      paddingBottom:"5px"
    }}>
      <h3>{isHidden?"This Context is Hidden":data}</h3>
      <button onClick={()=>{
        dispatch({type:"CHANGE_ISHIDDEN",payload:index})
      }}>Toggle</button>
    </div>
  )
}

export default TodoItem