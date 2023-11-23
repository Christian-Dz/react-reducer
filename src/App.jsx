
import { Contador } from './Components/Contador'
import { ContadorMejorado } from './Components/ContadorMejorado'
import { ShoppingCart } from './Components/ShoppingCart'
import { CrudApi } from "./Components/CrudApi"



function App() {
  

  return (
    <>
      <CrudApi/>
      <hr/>
      <ShoppingCart/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </>
  )
}

export default App
