import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-orange-400 text-white py-12 w-screen bottom-0 right-0 left-0 mt-[3%]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
        {/* Company Information */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-3xl font-bold">Crescentaria</h3>
          <p className="text-white-400">
            We aim to provide a seamless ordering experience and transform the
            way college canteens operate. Join us on our journey to modernize
            the dining experience.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-900"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-gray-300">
                Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> support@crescentaria.com
            </li>
            <li>
              <strong>Phone:</strong> +123-456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 College Road, B.S.Abdur Rahman
              Crescent Institute of Science And Technology
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form onSubmit={handleSubscribe}>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-white-800 text-black rounded-md focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-8 text-center text-white-400">
        &copy; {new Date().getFullYear()} Crescentaria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
