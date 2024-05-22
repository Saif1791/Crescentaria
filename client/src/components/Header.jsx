import logo from "../assets/logo.png";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import MenuBar from "./MenuBar.jsx";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
// import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  // const currentUser = useSelector((state) => state.user);
  const toggleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (click == true || click == false) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [click]);

  return (
    <header className="fixed top-0 bg-orange-400 w-screen text-black z-50">
      <div className="flex flex-row items-center p-5 sm:p-5 md:p-5 lg:p-5 lg:ml-52 xl:px-20">
        <Link to="/">
          <img
            src={logo}
            alt="Mascot Logo"
            className="rounded w-[100px] h-[100px]"
          />
        </Link>
        {/* <h1 className="text-black text-3xl ml-5">Crescentaria</h1> */}
        <div className="ml-auto text-3xl flex flex-row gap-10">
          <Link to="/profile">
            <FontAwesomeIcon
              icon={faUserTie}
              style={{ color: "#ffffff" }}
              className="hover:cursor-pointer hidden sm:block"
            />
          </Link>

          <div className="ml-auto mr-10 text-3xl z-50 sm:mr-auto">
            {click ? (
              <MdOutlineClose
                style={{ color: "black" }}
                className="items-center hover:cursor-pointer"
                onClick={toggleClick}
              />
            ) : (
              <HiOutlineViewGridAdd
                style={{ color: "black" }}
                className="items-center hover:cursor-pointer"
                onClick={toggleClick}
              />
            )}
          </div>
        </div>
      </div>

      <Transition
        appear={true}
        show={click}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <MenuBar />
      </Transition>
    </header>
  );
}

export default Header;
