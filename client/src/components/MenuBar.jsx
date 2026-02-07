import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { forwardRef, Fragment } from "react";
import { Transition } from "@headlessui/react";

const NavLink = styled.li`
  color: white;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
    background-color: white;
    bottom: -10px;
    left: 0;
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
    transform: bottom left;
    cursor: pointer;
  }
`;

const MenuBar = forwardRef(({ onClick, ...props }, ref) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div
      ref={ref}
      {...props}
      className={`bg-orange-600/95 backdrop-blur-sm min-h-screen w-full sm:w-2/3 lg:w-3/12 flex flex-col justify-center items-center z-50 fixed right-0 top-0 shadow-2xl ${
        props.className || ""
      }`}
    >
      <ul className="flex flex-col gap-10 text-white text-2xl font-bold tracking-wider text-center">
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-700 delay-100 placeholder-opacity-0"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <NavLink className="hover-underline">
            <Link
              to="/"
              onClick={onClick}
              className={isActive("/") ? "text-yellow-300" : ""}
            >
              HOME
            </Link>
          </NavLink>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-700 delay-200"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <NavLink className="hover-underline">
            <Link
              to="/about"
              onClick={onClick}
              className={isActive("/about") ? "text-yellow-300" : ""}
            >
              ABOUT US
            </Link>
          </NavLink>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-700 delay-300"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <NavLink className="hover-underline">
            <Link
              to="/contact"
              onClick={onClick}
              className={isActive("/contact") ? "text-yellow-300" : ""}
            >
              CONTACT
            </Link>
          </NavLink>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-700 delay-[400ms]"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <NavLink className="hover-underline">
            <Link
              to="/order"
              onClick={onClick}
              className={isActive("/order") ? "text-yellow-300" : ""}
            >
              ORDER NOW
            </Link>
          </NavLink>
        </Transition.Child>
      </ul>
    </div>
  );
});

MenuBar.displayName = "MenuBar";

export default MenuBar;
