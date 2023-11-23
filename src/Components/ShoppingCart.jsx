import { useReducer } from "react";
import { ShoppingReducer, shoppingInitialState } from "../reducers/shoppingReducer";
import { ProductItem } from "./ProductItem";
import { CartItem } from "./CartItem";
import { TYPES } from "../actions/shoppingActions";




export function ShoppingCart() {
    const [state, dispatch] = useReducer (ShoppingReducer, shoppingInitialState)
    const {products, cart} = state

    const addToCart = (id) => {
        dispatch ({type: TYPES.ADD_TO_CART, payload: id})
    }

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch ({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
        } else {
            dispatch ({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
        }
    }

    const clearCart = () => {
        dispatch ({type: TYPES.CLEAR_CART})
    }

  return (
    <>
      <h2> Carrito De Compras </h2>
      <h3> Productos </h3>
      <article className="box grid-resposive">
        {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
      </article>
      <h3> Carrito </h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => 
        <CartItem key={index} data={item} delFromCart={delFromCart}/>
        )}
      </article>
    </>
  );
}
