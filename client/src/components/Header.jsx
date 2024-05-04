import logo from "../assets/logo.png";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import MenuBar from "./MenuBar.jsx";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const currentUser = useSelector((state) => state.user);
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
      <div className="flex flex-row items-center mt-5 ml-40 gap-6">
        <Link to="/">
          <img
            src={logo}
            alt="Mascot Logo"
            className="rounded-full w-[80px ] h-[80px]"
          />
        </Link>
        <h1 className="text-black text-3xl">Crescentaria</h1>

        <>
          {currentUser && currentUser.avatar ? (
            <div className="ml-[1200px] w-7 h-7 rounded-full hover:cursor-pointer">
              <img src={currentUser.avatar} alt="User Avatar" />
            </div>
          ) : (
            <div className="ml-[1200px] text-3xl hover:cursor-pointer">
              <Link to="/profile">
                <FontAwesomeIcon
                  icon={faUserTie}
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </div>
          )}
        </>
        <div className="ml-auto mr-32 text-3xl z-50">
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
