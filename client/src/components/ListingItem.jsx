/* eslint-disable react/prop-types */
import { addUserId, addtoCart } from "../redux/cart/cartSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
export default function ListingItem({ listing, id }) {
  const disabled = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  // const { items } = useSelector((state) => state.cart);

  const addToCart = (e) => {
    // console.log(e.currentTarget.getAttribute("id"));
    if (user === null) {
      alert("Please Log In to order!");
      navigate("/signin");
      return;
    }
    try {
      if (user != null) {
        const userID = user._id;
        dispatch(addUserId({ userID: userID }));
        dispatch(addtoCart(listing));
        toast(`${listing.name} has been added to cart!`, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      } else {
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const check = () => {
      if (listing.available === false) {
        disabled.current = true;
      } else {
        disabled.current = false;
      }
    };
    check();
  });
  return (
    <div
      className="bg-white shadow-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] m-5"
      style={{
        opacity: disabled.current ? "0.5" : "1",
        pointerEvents: disabled.current ? "none" : null,
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
      />
      <img
        src={
          listing.imageUrl ||
          "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2023/August/aug-2023-cover-illustration-different-types-foods-five-food-groups-vegetables-fruits-dairy-products-oils-proteins.jpg?itok=1I_7PRfJ"
        }
        alt="listing cover"
        className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
      />
      <div className="p-3 flex flex-col gap-4 w-full">
        <p className="truncate text-lg font-semibold text-slate-700">
          {listing.name}
        </p>
        <div className="flex items-center gap-1 text-black">
          <FontAwesomeIcon icon={faBowlFood} />
          <p className="text-sm text-gray-600 truncate w-full">
            {listing.category}
          </p>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">
          {listing.description}
        </p>
        <div className="text-black flex gap-1">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.provider}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-slate-500 mt-2 font-semibold">
            Rs.{listing.price}
          </p>
          <div className="font-bold text-black flex flex-row mr-[5%]">
            <button
              className="bg-orange-400 p-3 rounded-full"
              onClick={(e) => addToCart(e)}
              id={id}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
