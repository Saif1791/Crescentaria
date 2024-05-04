import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import saif from "../assets/saif.jpg";
import narendran from "../assets/narendran.jpg";
import fouzan from "../assets/fouzan.jpg";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect to set the state to true when the component mounts
  useEffect(() => {
    setIsVisible(true); // Triggers the transition when component mounts
  }, []);
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 mt-24">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">About Us</h1>
        <p className="text-lg text-white-400">
          Learn more about our mission and vision.
        </p>
      </header>

      {/* About Us Section */}
      <section className="mt-8 w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <Transition
          as={Fragment}
          enter="transition-all duration-1500 ease-in-out"
          enterFrom="opacity-0 translate-y-5"
          enterTo="opacity-100 translate-y-0"
          show={isVisible}
        >
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of passionate techies committed to making your
              college canteen experience more efficient and enjoyable. Our goal
              is to streamline the ordering process, reduce wait times, and
              provide a seamless user experience.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to transform the traditional canteen experience
              into a modern, efficient, and enjoyable process. We believe in
              using technology to improve everyday life and create a positive
              impact on our college community.
            </p>
          </div>
        </Transition>
      </section>

      {/* Team Section */}
      <section className="mt-12 w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <Transition
          as={Fragment}
          enter="transition-all duration-1500 ease-in-out"
          enterFrom="opacity-0 translate-x-5"
          enterTo="opacity-100 translate-x-0"
          show={isVisible}
        >
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-20">
              Meet the <strong>Brains</strong> behind Crescentaria
            </h2>
            <div className="flex flex-wrap justify-between gap-6">
              <div className="w-full md:w-1/3 text-center">
                <img
                  src={saif}
                  alt="CEO"
                  className="w-full h-48 rounded-full object-contain"
                />
                <h3 className="text-xl font-semibold mt-4 text-orange-400">
                  Saif Z
                </h3>
                <p className="text-gray-600 font-bold">
                  Chief Executive Officer(CEO)
                </p>
              </div>

              <div className="w-full md:w-1/3 text-center">
                <img
                  src={fouzan}
                  alt="CTO"
                  className="w-full h-48 rounded-full object-contain"
                />
                <h3 className="text-xl font-semibold mt-4 text-orange-400">
                  Fouzan Masood
                </h3>
                <p className="text-gray-600 font-bold">
                  Chief Technical Officer(CTO)
                </p>
              </div>

              <div className="w-full md:w-1/3 text-center flex flex-col justify-center items-center">
                <img
                  src={narendran}
                  alt="CMO & CCEO"
                  className="w-full h-48 rounded-full object-contain"
                />
                <h3 className="text-xl font-semibold mt-4 text-orange-400">
                  Narendran N
                </h3>
                <p className="text-gray-600 font-bold">
                  Chief Marketing Officer & Cheif Customer experience
                  Officer(CMO & CCEO)
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </section>
    </div>
  );
};

export default AboutUs;
