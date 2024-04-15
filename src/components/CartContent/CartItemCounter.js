import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({product}) => {
const {cart, setCart,buyProducts} = useContext(dataContext);
const decrease = ()=>{
  const productrepeat = cart.find((item)=>item.id===product.id);
  product.cantidad !==1 && setCart(cart.map((item)=>item.id === product.id ? 
  {...product, cantidad: productrepeat.cantidad-1}:item));
}; 
  return (
    <>
        <p className='counter-button' onClick={decrease}>-</p>
        <p>{product.cantidad}</p>
        <p className='counter-button' onClick={()=>buyProducts(product)}>+</p>
    </>
  );
};

export default CartItemCounter
