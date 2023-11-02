import React, { useCallback } from "react";

import { Hotel } from "@/lib/types";
import Link from "next/link";

interface Props {
  hotel: Hotel;
  viewHotel: (id: string) => void;
}

const HotelCard = ({ hotel, viewHotel }: Props) => {
  const id = hotel.id;
  const onButtonClick = useCallback(() => viewHotel(id), [id]);
  return (
    <button onClick={onButtonClick}>
      <div className="flex flex-col space-y-1 p-2 hover:bg-slate-200 rounded-xl items-start">
        <img
          src={hotel.image}
          style={{ width: "100%", aspectRatio: 1, borderRadius: "16px" }}
        />
        <h1
          style={{
            color: "#1A1A1A",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          {hotel.name}
        </h1>
        <span className="font-bold">&#8377; {hotel.price}</span>
        {hotel.freeBreakfast && (
          <span className="text-green-700">Free breakfast</span>
        )}
      </div>
    </button>
  );
};

export default HotelCard;
