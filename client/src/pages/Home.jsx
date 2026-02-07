import { lazy, Suspense } from "react";

import Mainbutton from "../components/Mainbutton.jsx";
import Secondarybutton from "../components/Secondarybutton.jsx";
import cooking from "../assets/cooking.gif";
import { useEffect, useState } from "react";
// import ListingItem from "../components/ListingItem.jsx";
const ListingItem = lazy(() => import("../components/ListingItem.jsx"));
import { Link } from "react-router-dom";

const Home = () => {
  const [fooditems, setFoodItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fooditems_serialized = JSON.stringify(fooditems);
  // localStorage.setItem("localFooditems", fooditems_serialized);
  // const fooditems_deserialized = JSON.parse(
  //   localStorage.getItem("localFooditems")
  // );

  useEffect(() => {
    const fetchFood = async () => {
      const data = await fetch("/server/getFood");
      const res = await data.json();
      setFoodItems(res);
      // setLoading(false);
    };

    fetchFood();
  }, [fooditems]);

  return (
    <main className="text-center lg:text-left">
      {/* <div className="flex flex-row justify-center items-center align-middle w-[300px] h-[300px] z-50">
            <iframe src="https://lottie.host/embed/0bb0a6bf-5b4e-4640-b933-42b95acf2b44/bpBahTfpYb.json"></iframe>
          </div> */}

      <div className="flex flex-row justify-center align-middle w-full mt-60 lg:mt-96 text-center lg:text-left px-4">
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
            <Link to="/about">
              <Secondarybutton />
            </Link>
          </div>
        </div>
        <div className="mt-[-50px] ml-52 hidden lg:block">
          <img src={cooking} alt="burger" width={350} />
        </div>
      </div>
      <div className="flex flex-col justify-normal text-left lg:justify-center mt-28">
        <h1 className="text-orange-400 text-center text-5xl font-semibold">
          <span className="text-white underline lg:underline-offset-[20px]">
            Our Be
          </span>
          st Delicacies
        </h1>

        <div className="flex flex-wrap gap-4 justify-evenly mt-20 lg:mt-36">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            {fooditems.map((listing) => (
              <ListingItem
                listing={listing}
                key={listing._id}
                id={listing._id}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Home;
