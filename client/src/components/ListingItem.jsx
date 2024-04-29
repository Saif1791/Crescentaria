/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export default function ListingItem({ listing }) {
  const disabled = useRef(false);
  useEffect(() => {
    const check = () => {
      if (listing.available === false) {
        disabled.current = true;
      } else {
        disabled.current = false;
      }
    };
    check();
  });
  return (
    <div
      id="foodDiv"
      className="bg-white shadow-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]"
      style={{
        opacity: disabled.current ? "0.5" : "1",
        pointerEvents: disabled.current ? "none" : null,
      }}
    >
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrl ||
            "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2023/August/aug-2023-cover-illustration-different-types-foods-five-food-groups-vegetables-fruits-dairy-products-oils-proteins.jpg?itok=1I_7PRfJ"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1 text-black">
            <FontAwesomeIcon icon={faBookOpen} />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.category}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold ">
            Rs.{listing.price}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              <FontAwesomeIcon icon={faBed} className="text-lg" />{" "}
            </div>
            <div className="font-bold text-xs">
              <FontAwesomeIcon icon={faBath} className="text-lg" />{" "}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
