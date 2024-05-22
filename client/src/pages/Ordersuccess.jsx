import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Ordersuccess = () => {
  const [estimatedTime, setEstimatedTime] = useState("");
  const { orderid } = useParams();

  useEffect(() => {
    const newEstimatedTime = generateEstimatedTime();
    setEstimatedTime(newEstimatedTime);
  }, []);

  const generateEstimatedTime = () => {
    return Math.floor(Math.random() * 10) + 5;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Order Placed Successfully!
      </motion.h1>
      <motion.div
        className="bg-orange-500 rounded-lg p-6 mb-4 shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg">Your Order ID: {orderid}</p>
        <p className="text-lg">
          Estimated Time for Collection: {estimatedTime} minutes
        </p>
      </motion.div>
      <motion.button
        className="bg-white text-orange-500 font-bold py-2 px-4 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/">Continue Feasting</Link>
      </motion.button>
    </div>
  );
};

export default Ordersuccess;
