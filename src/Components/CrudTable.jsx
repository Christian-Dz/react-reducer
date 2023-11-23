import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
        <h3>Table Of Data</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Constellation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((el)=><CrudTableRow 
                    key={el.id} 
                    el={el} 
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    />)
                ):(
                <tr>
                    <td colSpan="3">Sin Datos</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}
