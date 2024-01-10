import {FcDeleteDatabase} from "react-icons/fc"
import {useDispatch} from "react-redux";
import {remove} from "../redux/slices/CartSlice";
//import { ToastContainer, toast } from 'react-toastify';
import {toast} from "react-hot-toast";
const CartItem=({item,itemIndex})=>{
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
    return (
        <div>
            <div>
              <div>
                <img src={item.image}/>
              </div>  
              <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div>
                    <p>{item.price}</p>
                    <div>
                        <FcDeleteDatabase/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};
export default CartItem;