import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import CartItem from "../components/CartItem.jsx";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/cart/cartSlice.js";
import { useEffect, useState, version } from "react";
import { emptyCart } from "../redux/cart/cartSlice.js";
import { cashfree } from "../cashfree/util.js";
import axios from "axios";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const userName = user.name;
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [sessionID, setSessionID] = useState(null);
  console.log(sessionID);
  // const [cartItems, setCartItems] = useState(items);
  const dispatch = useDispatch();

  const initialTotal = 0;
  var total = 0;
  total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    initialTotal
  );

  const getSessionId = async () => {
    axios
      .post("/server/pay", { version })
      .then((res) => {
        setSessionID(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSessionId();
  }, []);

  const handlePayment = async () => {
    let checkoutOptions = {
      paymentSessionId: sessionID,
      returnUrl: `http:localhost:5173/server/status/{order_id}`,
    };

    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  };

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
    // setCartItems(items.filter((item) => item._id !== id));
  };

  const onOrder = async () => {
    // console.log(items);
    handlePayment();
    try {
      const res = await fetch("/server/order/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          items,
          totalPrice: total,
          customerName: userName,
        }),
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(data.error);
        return;
      }
      setOrderPlaced(true);
      // console.log(data);
      dispatch(emptyCart());
    } catch (err) {
      console.log(err);
      setOrderPlaced(false);
    }
  };

  return (
    <main className="min-h-screen">
      <motion.div
        className="w-5/6 lg:max-w-2xl mx-auto mt-52 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {orderPlaced && orderPlaced ? (
          <p className="flex justify-center text-center text-4xl text-black">
            Order Placed
          </p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Your Cart
            </h2>
            {items.length === 0 ? (
              <p className="text-gray-600">
                Your cart is empty. Go{" "}
                <Link to="/" className="text-orange-400">
                  order now
                </Link>
                !
              </p>
            ) : (
              <div>
                {items.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    onRemove={onRemove}
                    id={item._id}
                  />
                ))}
                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">Total:</h3>
                  <p className="text-xl text-gray-900">
                    &#8377;{total.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-end mt-5 ">
                  <button
                    onClick={onOrder}
                    // onClick={handlePayment}
                    className="bg-orange-400 p-3 rounded transition ease-in-out hover:scale-110 hover:bg-indigo-500 duration-300"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </main>
  );
};

export default Cart;
