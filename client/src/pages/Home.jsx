import Mainbutton from "../components/Mainbutton.jsx";
import Secondarybutton from "../components/Secondarybutton.jsx";
import burger from "../assets/burger.gif";
import { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [fooditems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const data = await fetch("/server/getFood");
      const res = await data.json();
      setFoodItems(res);
    };

    fetchFood();
  }, [fooditems]);

  return (
    <main className="text-center lg:text-left">
      <div className="flex flex-row justify-center align-middle w-screen mt-60 lg:mt-96 text-center lg:text-left">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-5xl font-semibold">Eat Healthy & Study Well</h1>
          <h1 className="text-5xl font-semibold text-orange-400">
            Healthy Food
          </h1>
          <p className="flex flex-row flex-wrap text-sm justify-center lg:justify-normal lg:text-base">
            "Fueling Your Campus Experience — One Bite at a Time!"
          </p>
          <div className="flex flex-row gap-6 justify-center lg:justify-normal">
            <Link to="/order">
              <Mainbutton />
            </Link>
            <Secondarybutton />
          </div>
        </div>
        <div className="mt-[-250px] ml-52 hidden lg:block">
          <img src={burger} alt="burger" width={500} />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-28">
        <h1 className="text-orange-400 text-center text-5xl font-semibold">
          <span className="text-white underline lg:underline-offset-[20px]">
            Our Be
          </span>
          st Delicacies
        </h1>

        <div className="flex flex-wrap gap-4 justify-evenly mt-20 lg:mt-36">
          {fooditems.map((listing) => (
            <ListingItem listing={listing} key={listing._id} id={listing._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
