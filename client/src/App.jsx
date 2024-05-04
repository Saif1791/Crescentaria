import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Order from "./pages/Order.jsx";
import Header from "./components/Header.jsx";
import Profile from "./pages/Profile.jsx";
import AboutUs from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import PrivateComponent from "./components/PrivateComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<PrivateComponent />}>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
