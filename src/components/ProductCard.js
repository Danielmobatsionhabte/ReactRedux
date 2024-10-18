
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const cartList = useSelector((state) => state.cartState.cartList);

  useEffect(()=>{
    const productInCart = cartList.find(item=>item.id ===product.id);
        if(productInCart){
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
  },[cartList,product.id])

  const {name, price, image } = product;
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (<button style={{backgroundColor:'#FF0000'}} onClick={() => dispatch(remove(product))}>remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
