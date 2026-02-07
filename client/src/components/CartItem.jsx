/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { decrementQuantity, addtoCart } from "../redux/cart/cartSlice.js";
import { useState } from "react";

const hoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

const CartItem = ({ item, onRemove }) => {
  const dispatch = useDispatch();
  const quan = item.quantity;
  console.log(quan);
  const [cartQuantity, setCartQuantity] = useState(quan);
  console.log(cartQuantity);

  const addToCart = () => {
    // console.log(e.currentTarget.getAttribute("id"));
    setCartQuantity(cartQuantity + 1);
    try {
      dispatch(addtoCart(item));
    } catch (err) {
      console.log(err);
    }
  };

  //   const incrementQuantities = (id) => {
  //     console.log(item);
  //     try {
  //       dispatch(incrementQuantity(id));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const decrementQuantities = (id) => {
    try {
      setCartQuantity(cartQuantity - 1);
      dispatch(decrementQuantity(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow transition-all duration-200 my-2"
      whileHover={hoverVariants.hover}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg mr-4 transition-transform duration-200"
      />
      <div className="flex-1">
        <h3 className="text-sm lg:text-lg font-bold text-gray-900">
          {item.name}
        </h3>
        <p className="text-xs lg:text-sm text-gray-600">{item.description}</p>
        <p className="text-xs lg:text-sm text-gray-600">{item.category}</p>
        <div className="flex flex-col lg:flex-row justify-between mt-2 gap-4">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-xs lg:text-sm text-gray-800">Quantity:</p>
            <button
              className="rounded bg-black text-orange-400 p-1 hover:scale-150 active:scale-50"
              onClick={() => decrementQuantities(item._id)}
            >
              <FontAwesomeIcon icon={faMinus} className="text-xs" />
            </button>
            <p className="text-sm text-gray-800">{item.quantity}</p>
            <button
              className="rounded bg-black text-orange-400 p-1 hover:scale-150 active:scale-50"
              //   onClick={() => incrementQuantities()}
              onClick={() => addToCart()}
            >
              <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </button>
          </div>
          <p className="text-sm text-gray-800">
            Price: &#8377;{item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="text-gray-600 hover:text-red-600 transition-colors duration-200 block p-2 text-xl"
          onClick={() => onRemove(item._id)}
          title="Remove item"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
