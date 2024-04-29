import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const currentUser = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin"></Navigate>;
};

export default PrivateComponent;
