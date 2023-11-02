import { Hotel } from "@/lib/types";
import Link from "next/link";
import React, { useCallback } from "react";

const HotelDetailsCard = ({
  hotel,
  isLoading,
  toggleFavorite,
  goBack,
}: {
  hotel: Hotel | undefined;
  isLoading: boolean;
  goBack: () => void;
  toggleFavorite: (props: { id: string }) => void;
}) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!hotel) {
    return <div>Hotel Not found</div>;
  }

  const onToggleFavorite = useCallback(() => {
    toggleFavorite({
      id: hotel.id,
    });
  }, [toggleFavorite, hotel]);

  return (
    <div className="flex flex-col space-y-3 bg-white  relative">
      <button
        onClick={goBack}
        className="absolute top-[50px] left-10 z-20 text-white bg-white rounded-full hover:bg-slate-200"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2 12H5"
            stroke="#1A1A1A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
          <path
            d="M11.5 18.5L5 12L11.5 5.5"
            stroke="#1A1A1A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>{" "}
      </button>
      <button
        className="absolute top-[40px] right-10 z-20 text-white rounded-full hover:bg-red-200 p-1"
        style={{
          backgroundColor: hotel.favorite ? "red" : "white",
        }}
        onClick={onToggleFavorite}
      >
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.925 15.8746L6.75 14.8246C4.96667 13.2079 3.39567 11.6369 2.037 10.1116C0.679 8.58694 0 6.99961 0 5.34961C0 4.08294 0.433334 3.01628 1.3 2.14961C2.16667 1.28294 3.23333 0.849609 4.5 0.849609C5.23333 0.849609 5.996 1.03294 6.788 1.39961C7.57933 1.76628 8.31667 2.46628 9 3.49961C9.68333 2.46628 10.421 1.76628 11.213 1.39961C12.0043 1.03294 12.7667 0.849609 13.5 0.849609C14.7667 0.849609 15.8333 1.28294 16.7 2.14961C17.5667 3.01628 18 4.08294 18 5.34961C18 7.03294 17.2917 8.65361 15.875 10.2116C14.4583 11.7703 12.9083 13.3079 11.225 14.8246L10.075 15.8746C9.775 16.1413 9.41667 16.2786 9 16.2866C8.58333 16.2953 8.225 16.1579 7.925 15.8746ZM8.5 4.52461C7.91667 3.55794 7.3 2.87028 6.65 2.46161C6 2.05361 5.28333 1.84961 4.5 1.84961C3.5 1.84961 2.66667 2.18294 2 2.84961C1.33333 3.51628 1 4.34961 1 5.34961C1 6.08294 1.20833 6.83694 1.625 7.61161C2.04167 8.38694 2.604 9.18294 3.312 9.99961C4.02067 10.8163 4.82933 11.6496 5.738 12.4996C6.646 13.3496 7.6 14.2246 8.6 15.1246C8.71667 15.2413 8.85 15.2996 9 15.2996C9.15 15.2996 9.28333 15.2413 9.4 15.1246C10.4 14.2246 11.354 13.3496 12.262 12.4996C13.1707 11.6496 13.9793 10.8163 14.688 9.99961C15.396 9.18294 15.9583 8.38694 16.375 7.61161C16.7917 6.83694 17 6.08294 17 5.34961C17 4.34961 16.6667 3.51628 16 2.84961C15.3333 2.18294 14.5 1.84961
13.5 1.84961C12.7167 1.84961 12 2.05361 11.35 2.46161C10.7 2.87028 10.0833 3.55794 9.5 4.52461C9.43333 4.60794 9.35833 4.67461 9.275 4.72461C9.19167 4.77461 9.1 4.79961 9 4.79961C8.9 4.79961 8.80833 4.77461 8.725 4.72461C8.64167 4.67461 8.56667 4.60794 8.5 4.52461Z"
            fill="#1A1A1A"
          />
        </svg>
      </button>
      <img
        src={hotel.image}
        style={{ width: "100%", aspectRatio: 1, margin: 0 }}
      />
      <span className="font-bold px-4">&#8377; {hotel.price}</span>
      <div
        className="mx-4 border-t-[1px] flex flex-col space-y-3 py-4 px-2"
        style={{
          borderColor: " #888888",
        }}
      >
        <span
          style={{
            color: "#888888",
          }}
        >{`hotel in ${hotel.location}`}</span>
        <h1
          style={{
            color: "#1A1A1A",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          {hotel.name}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: hotel.description }}></p>
        <span>
          &#8377; {hotel.price}{" "}
          <span
            style={{
              color: "#888888",
            }}
          >
            / nights(all inc)
          </span>
        </span>
      </div>
    </div>
  );
};

export default HotelDetailsCard;
