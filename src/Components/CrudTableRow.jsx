import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, constellation, id} = el
  return (
    <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
           <button onClick={()=>setDataToEdit(el)}>Edit</button> 
           <button onClick={()=>deleteData(id)}>Delete</button> 
        </td>
    </tr>
  )
}
