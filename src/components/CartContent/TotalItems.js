import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



function TotalItems() {
    const {cart}=useContext(dataContext);
    const itemscant=cart.reduce((acc,el)=>acc+el.cantidad,0);

  return <span className="cart-items-total">{itemscant}</span>
}

export default TotalItems
