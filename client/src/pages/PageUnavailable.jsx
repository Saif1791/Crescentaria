import { motion } from "framer-motion";

const PageUnavailable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-40 w-40 mx-auto"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M22.5 4a28 28 0 1 1-11.7 52.3" />
              <path d="M21.3 24l5.2-6.6 4.5 5.7 5-3.6 3.8 6.1 7-2-1.3 6.4 8.7 7-9.2 2.3 1.7 6.4-8.6-2.4-2.5 8.7-6.6-6.4-6.6 6.4-2.5-8.7-8.6 2.4 1.7-6.4-9.2-2.3 8.7-7-1.3-6.4 7 2 3.8-6.1 5 3.6 4.5-5.7 5.2 6.6" />
            </g>
          </svg>
        </motion.div>
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Unavailable
        </motion.h2>
        <motion.p
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </motion.p>
        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Go to Homepage
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PageUnavailable;
