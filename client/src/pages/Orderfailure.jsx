import { motion } from "framer-motion";

const Orderfailure = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-900 text-white">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Unfortunately, your order didn't go through!
      </motion.h1>
      <motion.div
        className="bg-red-500 rounded-lg p-6 mb-4 shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg">
          Unfortunately, we couldn't process your order. Please try again.
        </p>
      </motion.div>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          className="bg-white hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Retry Order
        </button>
        <button
          className="bg-white hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Go to Homepage
        </button>
      </motion.div>
    </div>
  );
};

export default Orderfailure;
