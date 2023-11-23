import { useState, useEffect, useReducer } from 'react';
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from '../helpers/helpHttp';
import { Loader } from './Loader';
import { Message } from './Message';
import { crudInialState, crudReducer } from '../reducers/crudReducer';
import { TYPES } from '../actions/crudActions';


export const CrudApi = () => {
  // const [db, setDb] = useState(null)
  const [state, dispatch] = useReducer(crudReducer, crudInialState)
  const {db} = state
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = "http://localhost:5000/santos"

// GET
  useEffect(() => {
    setLoading(true)
    api.get(url)
    .then((res)=>{
      if (!res.err){
        //setDb(res)
        dispatch ({type: TYPES.READ_ALL_DATA, payload:res})
        setError(null)
      } else {
        //setDb(null)
        dispatch ({type: TYPES.NO_DATA})
        setError(res)
      }
      setLoading(false)
    })
  }, [])
  
// CREATE - POST
  const createData = (data)=>{
    data.id= Date.now()
    let options= {
      body: data,
      headers:{"content-type":"application/json"}
    }

    api.post(url, options).then((res)=>{
      if (!res.err){
        //setDb([...db, res])
      } else {
        setError(res)
      }
    })
    //setDb([...db, data])
  }

// UPDATE - PUT
  const updateData = (data)=>{
    let endpoint = `${url}/${data.id}`
    let options= {
      body: data,
      headers:{"content-type":"application/json"}
    }

    api.put(endpoint, options).then((res)=>{
      if (!res.err){
        //let newData= db.map((el)=>(el.id===data.id ? data:el))
        //setDb(newData)
        dispatch ({type: TYPES.UPDATE_DATA, payload:data})
      } else {
        setError(res)
      }
    })
  }

// DELETE
  const deleteData = (id)=>{
    let isDelete = confirm(`Confirm Delete ID ${id}?`)

    if (isDelete){
      //let newData = db.filter((el)=>el.id !==id)
      //setDb(newData)
      dispatch ({type: TYPES.DELETE_DATA, payload:id})
    } else {
      return
    }
  }

  return (
    <div>
        <h2>2. CRUD API REDUCER</h2>
        <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        {loading && <Loader/>}

        {error && <Message 
        msg={`Error ${error.status} : ${error.statusText}`} 
        bgColor="#dc3545"/>}

        {db && <CrudTable 
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />}
        
        
    </div>
  )
}
