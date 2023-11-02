import { Hotel } from "@/lib/types";
import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({
  hotels,
  isLoading,
  viewHotel,
}: {
  hotels: Hotel[] | undefined;
  isLoading: boolean;
  viewHotel: (id: string) => void;
}) => {
  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (!hotels?.length) {
    return <div>No hotels found. Try other Filters</div>;
  }

  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} viewHotel={viewHotel} />
      ))}
    </div>
  );
};

export default HotelList;
