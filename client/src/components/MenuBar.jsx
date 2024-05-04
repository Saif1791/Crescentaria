import styled from "styled-components";
import { Link } from "react-router-dom";
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
    bottom: -20px;
    left: 0;
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
    transform: bottom left;
    cursor: pointer;
  }
`;

const MenuBar = () => {
  return (
    <div
      className={
        "bg-orange-600 min-h-screen w-3/12 flex justify-center z-40 fixed right-0 top-0"
      }
    >
      <ul className="flex flex-col gap-20 mt-56 m-20 text-white text-4xl">
        <NavLink className="hover-underline">
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink className="hover-underline">
          <Link to="/about">About Us</Link>
        </NavLink>
        <NavLink className="hover-underline">
          <Link to="/contact">Contact</Link>
        </NavLink>
        <NavLink className="hover-underline">
          <Link to="/order">Order Now</Link>
        </NavLink>
      </ul>
    </div>
  );
};

export default MenuBar;
